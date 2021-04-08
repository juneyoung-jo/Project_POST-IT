# pip install stackapi
from stackapi import StackAPI

import pandas as pd
import csv

import datetime
import time


def cal_fromdate(now, i):  # (시간, i일 전)
    f = now - datetime.timedelta(days=i)
    return datetime.datetime.isoformat(f).split('T')[0] + ' 00:00:00'


def cal_todate(now, i):  # (시간, i일 전)
    f = now - datetime.timedelta(days=i)
    return datetime.datetime.isoformat(f).split('T')[0] + ' 23:59:59'

# import requests
# import json

# res = requests.get(
#     'https://api.stackexchange.com' +
#     '/2.2/questions?page=105&pagesize=100&order=desc&min=1616976000&max=1617062400&sort=activity&site=stackoverflow&filter=!)riR7ZAnK9L)awTF-Zo-')

# # print(res.json())
# print(len(res.json()['items']))


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

df.to_csv('./sof/'+day[r] + '.csv')
