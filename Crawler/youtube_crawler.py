import json
import os

# pip install googleapi
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from oauth2client.tools import argparser

# pip install pymongo
import urllib.parse
from pymongo import MongoClient

# 시간관련
from datetime import datetime, timedelta

host = "j4c103.p.ssafy.io"
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
collection = db['youtube']


DEVELOPER_KEY = "AIzaSyC0wo07Z69Ig5hy7lWwe595XQ-o5KPJU50"  # 유튜브 API 키 값
# DEVELOPER_KEY = "AIzaSyCk52y-NA-4W_DOohpl_M56NLv-f1aqQUs"
YOUTUBE_API_SERVICE_NAME = "youtube"
YOUTUBE_API_VERSION = "v3"

youtube = build(YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION,
                developerKey=DEVELOPER_KEY)

# strr = '2021-03-21T23:55:36Z'
# 날짜 2021.03.21


def dayFarmat(n):
    return n.split('T')[0].replace('-', '.')


# 채널 아이디
channels = ['UChflhu32f5EUHlY7_SetNWw', 'UC-TpdzGorF3igglmjCWQhMA', 'UCM9urpxJaoPf-j1cV9pGszg', 'UC63J0Q5huHSlbNT3KxvAaHQ', 'UCwXdFgeE9KYzlDdR7TG9cMw',
            'UCj5gqpKTDDxsXqceYwn1Feg', 'UCgktG0SJucAVueCOZC0t4xw', 'UCDT2efYTZ8y516QjrfsDQSA', 'UCP4bf6IHJJQehibu6ai__cg', 'UCUH2DSbsNUz2sW3kBNn4ibw',
            'UCVHFbqXqoYvEWM1Ddxl0QDg', 'UC4CjFOoZlYSaqMHEDFCKcXQ', 'UC7SGsu80wfuTyQWo-PKatvg', 'UC-mOekGSesms0agFntnQang', 'UCcqH2RV1-9ebRBhmN_uaSNg',
            'UC2wPiIf2xSXGTJNqo8UOY9g', 'UCNrehnUq7Il-J7HQxrzp7CA', 'UCwjaZf1WggZdbczi36bWlBA', 'UCSIsVRwCR9dbUXS7KUXX8JQ', 'UC7yfnfvEUlXUIfm8rGLwZdA',
            'UCLLncfeIYljE0o_yUw7MkcA', 'UC0Y0T9JpgIBbyGDjvy9PbOg', 'UCW4ixpFivk6eJl8b5bFOLkg', 'UCDGiCfCZIV5phsoGiPwIcyQ']

# channels = ['UChflhu32f5EUHlY7_SetNWw']


# # 채널 아이디 파싱
# search_response = youtube.search().list(
#     q="생활코딩1",
#     order="relevance",
#     part="snippet",
#     maxResults=1,
#     type='channel'
# ).execute()

# print(search_response)


# 채널 아이디로 비디오 가져오기.
data = []
now = datetime.now()  # 현재 시간
start = now - timedelta(7)  # 일주일 전 시간
for idx, channel in enumerate(channels):
    search_response = youtube.search().list(
        channelId=channel,  # 유튜브 채널 ID
        order="date",  # 정렬 기준
        part="snippet",
        # publishedAfter=start.isoformat('T') + "Z",
        # publishedBefore=now.isoformat('T') + "Z",
        maxResults=10,  # 개수
        type='video'  # 데이터 타입 (video, channel, playlist 등등 api 문서 참조)
    ).execute()

    for res in search_response['items']:
        youtubeId = res['id']['videoId']
        title = res['snippet']['title']
        date = res['snippet']['publishedAt']
        data.append({"youtubeId": youtubeId, "title": title, "url": " https://www.youtube.com/watch?v="+youtubeId, "category": idx,
                     "date": dayFarmat(date)})

# channel_id = search_response['items'][0]['id']['channelId']
# print(channel_id)

file = open('youtube_result.json', 'w', -1, "utf-8")
json.dump(data, file, ensure_ascii=False)
file.close

# print(data)
# 디비에 insert
print(data)
collection.insert_many(data)
