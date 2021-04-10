import pandas as pd
from bs4 import BeautifulSoup
from pandas.core.frame import DataFrame
import numpy as np
import re
import nltk  # pip install nltk
import os
import csv
import glob
import datetime
import time
from pymongo import MongoClient

path =r'./2021'
filenames = glob.glob(path + "/*.csv")
dfs = []
for filename in filenames:
    dfs.append(pd.read_csv(filename))

df = pd.concat(dfs, ignore_index=True)


# 새로운 title+body column 
df['t-body'] ='<p>' + df['title'] + '</p>' + df['body']
df = df.dropna( subset=[ 'tags' ] ) # tags가 nan인 데이터는 삭제.


datelists = []
timess = datetime.date(2021,1,3);
i = 2

for i in range(12):
    datalist = []
    for i in range(7):
        datalist.append(timess)
        timess += datetime.timedelta(days=1) 
    datelists.append(datalist)

# 파싱한 날짜 하나 더해서 줘야 함.
# ,id,title,body,creation_date,favorite_count,tags,view_count
# times = datetime.date(2021,1,3);

index = 2
for datelist in datelists: # 1월부터 2월 28일까지
    result = [] # 주간별 데이터 담는 배열
    for times in datelist: # 일주일 (7일)
        print(times)
        for idx, date in enumerate(df['creation_date'].values): #분석
            if str(times) in date:
                soup = BeautifulSoup(df["t-body"][idx],'html.parser')
                tags = BeautifulSoup(df["tags"][idx],'html.parser')
                tags = str(tags).lower().split("|")
                # p태그만 가져오기 
                a = str(soup.find_all("p"))
                # print(a)
                # code 태그 지우기
                while a.find('<code>') >= 0:
                    a = a.replace(a[a.find('<code>'):a.find('</code>')+7], '')
            # regular expression을 이용하여 태그 다 지우기.
                a = re.sub('<.+?>', '', a, 0).strip()
            # 특수문자 제거 re.sub('패턴', 교체함수, '문자열', 바꿀횟수) 
            # ex) html/css/javascript 를 htmlcssjavascript로 분리하길래 '' -> ' '로 바꿈(공백 추가)
                a = re.sub('[=\\\\,/\?:^$@*\"※~&;%ㆍ!』\\‘|\(\)\[\]\<\>`\…》0-9]', ' ', a)
                tokens = nltk.word_tokenize(a)

                tmp = []
                # nltk.download('punkt') 를 실행하여 Punket Tokenizer Models (13MB) 를 다운로드 해줍니다.
                # 품사 태깅을 하려면 먼저 nltk.download('averaged_perceptron_tagger') 로 태깅에 필요한 자원을 다운로드 해줍니다.
                tagged = nltk.pos_tag(tokens)
                for tag in tagged:
                    if tag[1] == 'NN' or tag[1] == 'NNP':
                        tmp.append(tag[0])
                 
                
                idd = df['id'][idx]
                title = df['title'][idx]
                body = df['body'][idx]
                creation_date = df['creation_date'][idx]
                up_vote_count = 0 if df['favorite_count'][idx] != df['favorite_count'][idx] else df['favorite_count'][idx]
#                 tags = df['tags'][idx]
                view_count = 0 if df['view_count'][idx] != df['view_count'][idx] else df['view_count'][idx]
                s = creation_date[0:19]
                timestamp = time.mktime(datetime.datetime.strptime(s, '%Y-%m-%d %H:%M:%S').timetuple())
                result.append({'contentId':int(idd),'words': tmp+tags,'title':title,'body':body,'creation_date':int(timestamp),'tags':tags,'view_count':int(view_count),'up_vote_count':int(up_vote_count),'weeks':index})
    print(len(result))
    if len(result) == 0:
        continue
    mycol.insert_many(result) #디비 저장
    index+=1


