import requests
from bs4 import BeautifulSoup
import json
import os
from selenium import webdriver

from urllib.request import urlopen
import ssl
from datetime import datetime, timedelta
import urllib.parse
from pymongo import MongoClient

# host = "j4c103.p.ssafy.io"
host = "3.34.182.63"
port = 27017
user_name = "ssafy103pi"
pass_word = "postit123"

db_name = "postit"  # database name to authenticate

# if you are password has '@' then you might need to escape hence we are using "urllib.parse.quote_plus()"
client = MongoClient(
    f'mongodb://{user_name}:{urllib.parse.quote_plus(pass_word)}@{host}:{port}/{db_name}')



# db
db = client['postit']
# 컬렉션
collection = db['blog']

dateMatcher = {
    "Jan": "01",
    "Feb": "02",
    "Mar": "03",
    "Apr": "04",
    "May": "05",
    "Jun": "06",
    "Jul": "07",
    "Aug": "08",
    "Sep": "09",
    "Oct": "10",
    "Nov": "11",
    "Dec": "12"
}

# 6 -> 06
# 12 -> 12


def dayFarmat(n):
    if(len(str(n)) == 1):
        return str("0" + str(n))
    return str(n)
 
# 딕셔너리 형태
# "1" : 카카오
# "2" : 우아한 형제들
# "3" : 쿠팡
# "4" : 라인
# "5" : "페이스북"
# "6" : "넷플릭스"
# "7" : "구글플레이"

data = {}
# 카카오
arr = []
for i in range(1, 4):
    context = ssl._create_unverified_context()
    res = urlopen("https://tech.kakao.com/blog/page/" +
                  str(i)+"/#posts", context=context)
    soup = BeautifulSoup(res.read(), 'html.parser', from_encoding='utf-8')
    urls = soup.select('ul.list_post strong.tit_post')
    atag = soup.select('#posts > div > div.wrap_post > ul > li a.link_post')
    date = soup.select(
        '#posts > div > div.wrap_post > ul > li > a.link_post > span')
    img = soup.select(
        '#posts > div > div.wrap_post > ul > li > a.link_post > div > img')
    n = 1
    for url in urls:
        if(len(date[n-1].text) < 3):  # 몇개의 게시물의 날짜가 표시되지 않는다, 게시글까지 타고 들어가서 날짜를 가져온다
            context = ssl._create_unverified_context()
            res = urlopen(atag[n-1].get('href'), context=context)
            soup = BeautifulSoup(res.read(), 'html.parser',
                                 from_encoding='utf-8')

            date_branch = soup.select('span.txt_date')
            arr.append({"title": url.text, "url": atag[n-1].get(
                'href'), "date": date_branch[0].text, "image": img[n-1]['src']})
            # print(url.text + " " +
                #   atag[n-1].get('href') + " " + date_branch[0].text)
        else:
            arr.append({"title": url.text, "url": atag[n-1].get(
                'href'), "date": date[n-1].text, "image": img[n-1]['src'], "category": 1})
        n += 1

data["1"] = arr


# # 우아한 형제들
context = ssl._create_unverified_context()
res = urlopen("http://woowabros.github.io/?source=post_page-----e2d736d0e658----------------------", context=context)
soup = BeautifulSoup(res.read(), 'html.parser', from_encoding='utf-8')

urls = soup.select('body > div.page-content > div > section > div > div > a > h2')
atag = soup.select('body > div.page-content > div > section > div > div > a')
date = soup.select('body > div.page-content > div > section > div > div > span')

n = 1

arr = []
for url in urls:
    # 날짜 포멧 맞추기
    dateText = date[n-1].text
    dateEnd = dateText.find(",")+1
    subdate = dateText[0:dateEnd+5]
    resdate = str(subdate[subdate.find(",")+2:subdate.find(",")+6]) + "." + str(dayFarmat(dateMatcher[subdate[0:3]]))  + "." + str(dayFarmat(subdate[4:subdate.find(",")]))

    arr.append({"title" : url.text, "url" : "http://woowabros.github.io" + atag[n-1].get('href'), "date" : resdate, "image":"https://www.woowahan.com/img/pc/common-logo.png", "category": 2})
    # print(url.text +" "+ "http://woowabros.github.io" + atag[n-1].get('href') +" "+ resdate)
    n += 1
data["2"] = arr

# 쿠팡
res = requests.get('https://medium.com/coupang-tech/technote/home')
html = res.content
soup = BeautifulSoup(html, 'html.parser', from_encoding='utf-8')

urls = soup.select(
    'div > div > div > section > div > div > div > a > h3 > div')
atag = soup.select(
    'div.col.u-xs-marginBottom10.u-paddingLeft0.u-paddingRight0.u-paddingTop15.u-marginBottom30 > a')
date = soup.select(
    'div.postMetaInline.postMetaInline-authorLockup.ui-captionStrong.u-flex1.u-noWrapWithEllipsis > div > time')
imgs = soup.select(
    'div > section > div > div > div.u-lineHeightBase.postItem > a')

# background-image: url("https://cdn-images-1.medium.com/max/500/1*Ll0r-OFkQ0QuQSuUxnAbkw.jpeg"); background-position: 50% 50% !important;
n = 1
#

arr = []
img_attr = ['peg', 'png']
for url in urls:
    # 날짜 가져오기 (년도가 생략돼있으면 올해 포스트한 글이다)
    dateText = date[n-1].text
    if(len(dateText) <= 8):
        year = "2019"
    else:
        year = dateText[dateText.find(",")+2: dateText.find(",")+6]

    month = dateMatcher[dayFarmat(dateText[0:3])]
    day = dayFarmat(dateText[4:5])
    resDate = year + "." + month + "." + day
    tmp = imgs[n-1]['style'].split('background-image: url("')[1][:-44]
    if tmp[-3:] not in img_attr:
        tmp = "null"
    arr.append(
        {"title": url.text, "url": atag[n-1].get('href'), "date": resDate, "image": tmp, "category": 3})
    # print(url.text +" "+ atag[n-1].get('href') +" "+ resDate)
    n += 1

data["3"] = arr
#post-109079

# 라인
arr = []
res = requests.get('https://engineering.linecorp.com/ko/blog/')
html = res.content
soup = BeautifulSoup(html, 'html.parser', from_encoding='utf-8')
urls = soup.select('div > div > header > h2 > a')
atag = soup.select('div > div > header > h2 > a')
date = soup.select('div > div > header > div > span.posted-on > span.published')
#post-109079 >
n = 1
for url in urls:
    dateText = date[n-1].text
    resDate = dateText[3:13]
    arr.append({"title" : url.text, "url" : atag[n-1].get('href'), "date" : '20'+resDate, "image":"https://line.me/static/940874c48d2369be137d812b15491843/f2838/icon-title-pc.png", "category": 4})
    # print(url.text +" "+ atag[n-1].get('href') + " " + resDate)
    n += 1

data["4"] = arr


# 페이스북 (최신 9개만 가져온다) (이미지 함.)
res = requests.get('https://developers.facebook.com/blog/')
html = res.content
soup = BeautifulSoup(html, 'html.parser', from_encoding='utf-8')

urls = soup.select('h2._1jlv._7p3_._66wj')
atag = soup.select('a._8xd-._8xdi._8zgc._8zgd')
date = soup.select('div._6z8e > div._6z8b > div._6z8a')
imgs = soup.select('div._6z8j > a > img')
n = 1

arr = []

for url in urls:
    # 날짜 만들기
    dateText = date[n-1].text
    year = dayFarmat(dateText[dateText.find("년")-4:dateText.find("년")].strip())
    month = dayFarmat(dateText[dateText.find("월") -
                               2:dateText.find("월")].strip())
    day = dayFarmat(dateText[dateText.find("일")-2:dateText.find("일")].strip())

    resDate = year + "." + month + "." + day

    arr.append(
        {"title": url.text, "url": atag[n-1].get('href'), "date": resDate, "image": imgs[n-1].get('src'), "category": 5})
    # print(url.text + " " + atag[n-1].get('href') + " " + resDate)
    n += 1

data["5"] = arr

# 넷플릭스 (최신)
res = requests.get('https://medium.com/netflix-techblog')
html = res.content
soup = BeautifulSoup(html, 'html.parser', from_encoding='utf-8')

urls = soup.select(
    'h3.u-contentSansBold.u-lineHeightTightest.u-xs-fontSize24.u-paddingBottom2.u-paddingTop5.u-fontSize32 > div')
atag = soup.select(
    'a:has(> h3.u-contentSansBold.u-lineHeightTightest.u-xs-fontSize24.u-paddingBottom2.u-paddingTop5.u-fontSize32)')
date = soup.select(
    'div.postMetaInline.postMetaInline-authorLockup.ui-captionStrong.u-flex1.u-noWrapWithEllipsis > div > time')
imgs = soup.select(
    'div.u-lineHeightBase > a'
)
# print(imgs[0].get('style').split('"')[1])

n = 1

arr = []
for url in urls:
    dateText = date[n-1].text
    if(len(dateText) < 8):
        year = "2021"
        day = dayFarmat(dateText[4:])

    else:
        year = dateText[dateText.find(",")+2:]
        day = dayFarmat(dateText[dateText.find(',')-2:dateText.find(',')].replace(' ','0'))
    month = dateMatcher[dayFarmat(dateText[0:3])]
    resDate = year + "." + month + "." + day

    arr.append(
        {"title": url.text, "url": atag[n-1].get('href'), "date": resDate, "image": imgs[n-1].get('style').split('"')[1], "category": 6})
    # print(url.text + " " + atag[n-1].get('href') + " " + resDate)
    n += 1

data["6"] = arr

# #구글플레이 (최신) (태그정보까지 집어넣을 수 있을거같음)
arr = []
path = ["android-app-development", "game-development"]
for i in path:
    res = requests.get('https://medium.com/googleplaydev/tagged/' + i)
    html = res.content
    soup = BeautifulSoup(html, 'html.parser', from_encoding='utf-8')

    urls = soup.select('h3.graf.graf--h3.graf-after--figure.graf--title')
    atag = soup.select('a:has( h3.graf.graf--h3.graf-after--figure.graf--title)')
    date = soup.select(
        'div.postMetaInline.postMetaInline-authorLockup.ui-captionStrong.u-flex1.u-noWrapWithEllipsis > div > a > time')
    imgs = soup.select('figure > div > img')
    # print(imgs)

    n = 1

    for url in urls:
        dateText = date[n-1].text
        if(len(dateText) <= 8):
            year = "2021"
        else:
            year = dateText[dateText.find(",")+2: dateText.find(",")+6]
        month = dateMatcher[dayFarmat(dateText[0:3])]
        day = dayFarmat(dateText[4:5])
        resDate = year + "." + month + "." + day

        arr.append({"title": url.text, "url": atag[n-1].get('href'), "date": resDate, "image": imgs[n-1].get('src'), "category": 7})
#         # print(url.text + " " + atag[n-1].get('href') + " " + resDate)
        n += 1

data["7"] = arr


number = ["1","2","3","4","5","6","7"]
last_week = (datetime.today() - timedelta(7) )

new_data = []

# 기본 데이터 
# for n in number:
#     print(data[n])
#     collection.insert_many(data[n])

# 일주일 갱신 데이터 코드
for n in number:
    for d in data[n]:
        covert_date = datetime.strptime(d["date"], "%Y.%m.%d").date()
        if last_week.date() <= covert_date:
            new_data.append(d)

# collection.insert_many(new_data)

# 모든 내용 json 파일화
# file = open('result.json', 'w', -1, "utf-8")
# json.dump(data, file, ensure_ascii=False)
# file.close

# 디비 (json)
# collection.insert_many(data)
