# data = "Dec 7, 2020"
data = "Dec 10, 2020"
print(data[data.find(',')-2:data.find(',')].replace(' ','0'))