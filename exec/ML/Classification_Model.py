"""
    Author : HanJaehee
    date : 2021/4/1
"""
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
import csv
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report
from sklearn.linear_model import LogisticRegression
import pickle
import joblib

# Load Model
data_x = []
data_y = []
with open('../NLP/newlistfile.csv') as csvfile:
    reader = csv.reader(csvfile, delimiter=',')
    for row in reader:
        words = row[1][2:len(row[1])-2].replace("\"","").replace("\\","").replace("'", "").split(", ")
        data_x.append(' '.join(words))
        data_y.append(row[2])

# TF-IDF
transformed_data_x = TfidfVectorizer(ngram_range=(1,2), max_features=50000, sublinear_tf=True, min_df = 1).fit_transform(data_x)

# fit model
# 다항 로지스틱 회귀 , multi_class = multinomial 고정
# C : Train Strenth -> 클수록 규제(regularization)가 약하대요

model = LogisticRegression(multi_class='multinomial',C=100000,solver='newton-cg').fit(train_x, train_y)

joblib.dump(model, 'Learned_model')