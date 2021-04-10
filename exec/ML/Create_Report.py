# coding: utf-8
"""
    Author : HanJaehee
    date : 2021/4/6
"""
import joblib
import csv
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics import accuracy_score
from datetime import timedelta, date, datetime
from pymongo import MongoClient
from time import time



# vectorizer load
tf_data_x = []
with open('/var/jenkins_home/newlistfile.csv') as csvfile: # locate in jenkins_home
    reader = csv.reader(csvfile, delimiter=',')
    for row in reader:
        words = row[1][2:len(row[1])-2].replace("\"","").replace("\\","").replace("'", "").split(", ")
        tf_data_x.append(' '.join(words))

tv = TfidfVectorizer(ngram_range=(1,2), max_features=50000, sublinear_tf=True, min_df = 1).fit(tf_data_x)
# ngram_range : 단어는 1~2개로 묶일 수 있음
# max_features : feature는 50000개로 제한
# sublinear_tf : 분류 기준을 느슨하게 조절함
# min_df : 최소 카운트 1개 이상으로


# 매주 들어오는 데이터
my_client_contents = MongoClient('mongodb://%s:%s@3.34.182.63:27017/postit' % ("ssafy103pi", "postit123"))
mydb = my_client_contents['postit']
mycol_contents = mydb['contents']


# mongo 에서 읽어서 classified
data = list(x for x in mycol_contents.find())

data_x = []
for row in data:
    data_x.append(' '.join(row["words"]))

model = joblib.load('/var/jenkins_home/Learned_model')

# TF-IDF
transformed_data = tv.transform(data_x)

# classified data
predicted = model.predict(transformed_data)

# Add Category column
for idx in range(len(data)):
    data[idx]["category"] = predicted[idx]
    del data[idx]["_id"]

# data insert
my_dict = data


## tag and word whitelist
white_list = "python java javascript c# python-3.x typescript php dart  c++ kotlin go c rust scala ruby js cpp \
reactjs angular vue.js  html css react-hooks webpack  next.js material-ui  jestjs api jquery axios blazor angular-material unit-testing  vuetify.js authentication graphql nuxt.js vuejs2 redux rest react-navigation react-redux bootstrap-4 angular8 react-router angular9 websocket cookies async-await gatsby antd  sass create-react-app xml json \
android  flutter react-native ios swift json ionic-framework expo authentication flutter-layout rest react-navigation xamarin.forms react-native-android xamarin flutter-dependencies swiftui vue react nuxtjs nextjs angular bootstrap \
node.js  spring-boot laravel  spring django json npm jestjs express api discord.js gradle .net blazor flask unit-testing maven nestjs authentication graphql rest ruby-on-rails jwt hibernate cors async-await swagger typeorm jwt \
docker amazon-web-services firebase kubernetes azure linux docker-compose azure-devops google-cloud-firestore nginx google-cloud-platform aws-lambda  amazon-s3 terraform jenkins dockerfile azure-pipelines  ansible azure-active-directory kubernetes-helm  firebase-authentication google-cloud-functions azure-functions amazon-ec2 firebase-cloud-messaging heroku  github-actions s3 ec2 aws \
tensorflow pandas keras pytorch mongodb opencv selenium machine-learning apache-spark apache-kafka numpy matplotlib dataframe deep-learning pyspark anaconda scikit-learn google-colaboratory plotly  selenium-webdriver powerbi tensorflow2.0 web-scraping image-processing airflow conda \
mysql postgresql sql sql-server oracle elasticsearch database redis \
visual-studio-code android-studio xcode   visual-studio jupyter-notebook  intellij-idea eslint visual-studio-2019 vscode intellij \
linux macos windows ubuntu powershell bash windows-subsystem-for-linux \
discord git github discord.js discord.py google-sheets discord.py-rewrite"
white_list = white_list.split(" ")


## 각 카테고리별 all_dict, word_dict, tag_dict

all_data = {}
category_count = [ x for x in range(10)]

for category in range(10):
    all_data[category] = {}
    all_data[category]["all_dict"] = {}
    all_data[category]["word_dict"] = {}
    all_data[category]["tag_dict"] = {}
    all_data[category]["most_error"] = []
    all_data[category]["all_tag_list"] = [] # for Network map


max_view = [ x for x in range(10)]
max_vote = -1
most_vote = []
for row in my_dict:
    
    category_num = int(row["category"])
    category_count[category_num] += 1 # for 공통보고서 2
    
    all_dict = all_data[category_num]["all_dict"]
    word_dict = all_data[category_num]["word_dict"]
    tag_dict = all_data[category_num]["tag_dict"]
    most_error = all_data[category_num]["most_error"]
    all_tag_list = all_data[category_num]["all_tag_list"]
    
    word_list = row["words"]
    tag_list = row["tags"]
    
    all_tag_list.append(tag_list)
    
    # view count 순 정렬 for most_error
    view_count = row["view_count"]
    if max_view[category_num] < view_count:
        max_view[category_num] = view_count
        most_error.append({
            "contentId" : row["contentId"],
            "count" : view_count,
            "title" : row["title"],
            "creation_date" : "{:%Y-%m-%d %H:%M:%S}".format(datetime.fromtimestamp(row["creation_date"]))
        })
        
    # most vote 
    vote_count = row["up_vote_count"]
    if max_vote < vote_count:
        max_vote = vote_count
        most_vote.append({
            "contentId" : row["contentId"],
            "count" : vote_count,
            "title" : row["title"],
            "creation_date" : "{:%Y-%m-%d %H:%M:%S}".format(datetime.fromtimestamp(row["creation_date"]))
        })
        
    
    for word in word_list:
        if word in white_list:
            if word in all_dict:
                all_dict[word] += 1
            else:
                all_dict[word] = 1

            if word in word_dict:
                word_dict[word] += 1
            else:
                word_dict[word] = 1

    for tag in tag_list:
        if tag in white_list:
            if tag in all_dict:
                all_dict[tag] += 1
            else:
                all_dict[tag] = 1

            if tag in tag_dict:
                tag_dict[tag] += 1
            else:
                tag_dict[tag] = 1

category_name_dict = {
    0 : "language",
    1 : "web",
    2 : "mobile",
    3 : "backend",
    4 : "cloud-devops",
    5 : "bigdata-ai-ml",
    6 : "database",
    7 : "editor",
    8 : "OS",
    9 : "pitch"
}
"""
 Creaet Common Report
"""
## 공통 Report 1 : 최다 VOTE 글 10개, 데이터에 아직 Vote가 없음
most_vote = most_vote[-10:]
most_vote.reverse()

## 공통 Report 2 : 모든 카테고리별 비율

all_category_ratio = []
for i, category in enumerate(category_count):
    all_category_ratio.append({
        "name" : category_name_dict[i],
        "value" : category
    })
    
print(all_category_ratio) # 크기순으로 정렬해서 드릴까요?

## export commport report
common_report = {
    "most_vote" : most_vote,
    "all_category_ratio" : all_category_ratio, 
}

"""
 Create Category Report
"""

category_report = {}

for category in range(7):
    
    ## Category Report 1 : 네트워크맵 -> tag top8~10, word top3~5
    
    tag_dict = all_data[category]["tag_dict"]
    tag_list = []
    count_list = []

    # tag top 10 뽑음
    word_count = 10
    for i in range(word_count):
        key_max = max(tag_dict.keys(), key=(lambda k: tag_dict[k]))
        tag_list.append(key_max)
        count_list.append(tag_dict.pop(key_max))
    
    # tag 10 각 단어가 포함된 글에서 언급된 글 word top 3~5
    child_list = []
    
    root = {
        "name" : category_name_dict[category],
    }
    root_children = []
    for tag in tag_list:
        child_dict = {}
        child = []
        for row in all_data[category]["all_tag_list"]:
            if tag in row:
                for word in row:
                    if word == tag:
                        continue
                        
                    if word in child:
                        child_dict[word] += 1
                    else:
                        child_dict[word] = 1
        # 상위 3개 뽑아냄
        child_list = []
        child_count = []
        word_count = 3
        for i in range(word_count):
            key_max = max(child_dict.keys(), key=(lambda k: child_dict[k]))
            child_list.append(key_max)
            child_count.append(child_dict.pop(key_max))

        for i in range(3):
            child.append({
                "name" : child_list[i],
                "value" : child_count[i]
            })
        
        root_children.append({
            "name": tag,
            "children": child
        })
    root["children"] = root_children
    network_map = [root]
    
    
    ## Category Report 2 : 가장 핫한 키워드 (word + tag), 바 그래프 (딕셔너리 화이트 리스트)
    all_dict = all_data[category]["all_dict"]
    most_hot_keyword = []

    word_list = []
    count_list = []

    word_count = 10
    for i in range(word_count):
        key_max = max(all_dict.keys(), key=(lambda k: all_dict[k]))
        word_list.append(key_max)
        count_list.append(all_dict.pop(key_max))

    for i in range(10):
        most_hot_keyword.append({
            "word" : word_list[i],
            "count" : count_list[i]
        })
    

    ## Category Report 3 : 태그 워드 클라우드 (only tag), Word Cloud 
    tag_dict = all_data[category]["tag_dict"]
    tag_wordcloud = []

    word_list = []
    count_list = []
    try:
        word_count = len(tag_dict) > 70 and 70 or len(tag_dict)
        for i in range(word_count):
            key_max = max(tag_dict.keys(), key=(lambda k: tag_dict[k]))
            word_list.append(key_max)
            count_list.append(tag_dict.pop(key_max))
    except:
        print(category)

    for i in range(len(word_list)):
        tag_wordcloud.append({
            "word" : word_list[i],
            "count" : count_list[i]
        })
    
    ## Category Report 4 : 가장 많이 겪은 에러 TOP 3 : View Count 순
    most_error = all_data[category]["most_error"][-10:]
    most_error.reverse()
    
    ## export category report
    category_report[category_name_dict[category]]= {
        "network_map" : network_map,
        "most_hot_keyword" : most_hot_keyword,
        "tag_wordcloud" : tag_wordcloud,
        "most_error" : most_error
    }

## Export All Rerpot
report = {
    "creation_date" : int(time()*1000),
    "common_report" : common_report,
    "category_report" : category_report,
}

report_client = MongoClient('mongodb://%s:%s@3.34.182.63:27017/postit' % ("ssafy103pi", "postit123"))
mydb = report_client['postit']
mycol = mydb['report']
mycol.insert_one(report)

# remove after creating report
mycol_contents.remove({})
