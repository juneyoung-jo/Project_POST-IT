# pip install stackapi
from stackapi import StackAPI

import requests
import json

res = requests.get(
    'https://api.stackexchange.com' +
    '/2.2/questions?page=1&pagesize=1&order=desc&min=1616371200&max=1617062400&sort=activity&site=stackoverflow&filter=!)riR7ZAnK9L)awTF-Zo-')
print(res.text)


# SITE = StackAPI('stackoverflow')
# SITE.page_size = 10
# SITE.max_pages = 100
# questions = SITE.fetch('questions', todate="1617062400",
#                        filter="!)riR7ZAnK9L)awTF-Zo-")

# print(len(questions['items']))
