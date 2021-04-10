#!/usr/bin/env python
# coding: utf-8

"""
    Author : JoJunYoung
    Date : 2021/4/6
"""

import pandas as pd
import csv
from stackapi import StackAPI
import datetime
import time
from pymongo import MongoClient
from bs4 import BeautifulSoup
from pandas.core.frame import DataFrame
import numpy as np
import re
import nltk  # pip install nltk
import os
import glob


def cal_fromdate(now, i):  # (시간, i일 전)
    f = now - datetime.timedelta(days=i)
    return datetime.datetime.isoformat(f).split('T')[0] + ' 00:00:00'


def cal_todate(now, i):  # (시간, i일 전)
    f = now - datetime.timedelta(days=i)
    return datetime.datetime.isoformat(f).split('T')[0] + ' 23:59:59'


day = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
r = datetime.datetime.today().weekday()-1



# 현재 시간
now = datetime.datetime.now()
tf = cal_fromdate(now, 1)  # 시작시간
tt = cal_todate(now, 1)  # 끝 시간

fromdate = time.mktime(datetime.datetime.strptime(
    tf, '%Y-%m-%d %H:%M:%S').timetuple())

todate = time.mktime(datetime.datetime.strptime(
    tt, '%Y-%m-%d %H:%M:%S').timetuple())

SITE = StackAPI('stackoverflow')
SITE.page_size = 100
SITE.max_pages = 100
questions = SITE.fetch('questions', min=int(fromdate), max=int(todate), sort='creation',
                       filter="!LaSRLvLhBKxW(RHyO8wrN-")

idd = []
title = []
body = []
creation_date = []
tags = []
view_count = []
up_vote_count = []

for question in questions['items']:
    idd.append(question['question_id'])
    title.append(question['title'])
    body.append(question['body_markdown'])
    creation_date.append(question['creation_date'])
    tags.append('|'.join(question['tags']))
    view_count.append(question['view_count'])
    up_vote_count.append(question['up_vote_count'])

data = {"id": idd, "title": title, "body": body, "creation_date": creation_date,
        "tags": tags, "view_count": view_count, "up_vote_count": up_vote_count}

df = pd.DataFrame(data)


df['t-body'] ='<p>' + df['title'] + '</p>' + df['body']
df = df.dropna( subset=[ 'tags' ] ) # tags가 nan인 데이터는 삭제.

result = []

for row_index, row in df.iterrows(): # 10개만 일단
    soup = BeautifulSoup(row["t-body"],'html.parser')
    tags = BeautifulSoup(row["tags"],'html.parser')
    view_count_row = row["view_count"]
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
    
    result.append({'contentId':row["id"], 'words':tmp+tags,'tags':tags,'view_count':view_count_row,'up_vote_count':row['up_vote_count'],'title':row["title"],'creation_date':row['creation_date']})



sof_client = my_client = MongoClient('mongodb://%s:%s@3.34.182.63:27017/postit' % ("ssafy103pi", "postit123"))
mydb = sof_client['postit']
mycol = mydb['contents']
mycol.insert_many(result)
