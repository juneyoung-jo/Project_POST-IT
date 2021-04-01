# pip install stackapi
from stackapi import StackAPI

import pandas as pd
import csv

# import requests
# import json

# res = requests.get(
#     'https://api.stackexchange.com' +
#     '/2.2/questions?page=105&pagesize=100&order=desc&min=1616976000&max=1617062400&sort=activity&site=stackoverflow&filter=!)riR7ZAnK9L)awTF-Zo-')

# # print(res.json())
# print(len(res.json()['items']))


SITE = StackAPI('stackoverflow')
SITE.page_size = 100
SITE.max_pages = 1000
questions = SITE.fetch('questions', min='1616371200', max='1616889600',
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

# for tag in tags:


data = {"id": idd, "title": title, "body": body, "creation_date": creation_date,
        "tags": tags, "view_count": view_count, "up_vote_count": up_vote_count}

df = pd.DataFrame(data)

df.to_csv('sof_weekly.csv')

# print(df['tags'])
# print(questions['items'][1])
# print(len(questions['items']))
