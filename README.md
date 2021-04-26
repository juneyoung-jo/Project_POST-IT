# POST-IT ( 개발자 트렌드 보고서 )

> 개발자를 위한 트렌드 보고서 제공 및 개발 관련 컨텐츠 제공 서비스

![https://user-images.githubusercontent.com/60593545/114670646-3228cd00-9d3e-11eb-84fa-0164d7f99d8d.png](https://user-images.githubusercontent.com/60593545/114670646-3228cd00-9d3e-11eb-84fa-0164d7f99d8d.png)

## 🚩 Features

- [x]  화려한 그래프 (amchart)
- [x]  편의성을 위한 북마크 기능
- [x]  MSA 아키텍쳐
- [x]  머신러닝을 통한 카테고리 분석 ( Logistic Regression )
- [x]  주간 데이터 크롤링

## 📚 Tech Stack

- Spring Boot
- MongoDB
- Spring Security
- Spring Cloud
- Redis
- Reactjs
- Typescript
- Recoil
- Axios

## 📑 나의 역할

- Report Server 구현 ( Service server )
    - Java 1.8 에서 추가된 stream을 사용한 간결한 코드 작성
    - Entity와 Payload 를 구분하여 Class 설계
- Python crawler
    - Youtube ( Youtube API 사용 )
    - Stackoverflow ( Stack API 사용 )
- Redis 를 이용한 컨트롤러 설계
    - 스케쥴러를 활용한 주 1회 업데이트 서비스의 특성상 Redis cache 도입
    - 기업별 블로그 컨텐츠 캐싱
    - 채널별 유튜브 컨텐츠 캐싱

## ✨개발 환경

![https://user-images.githubusercontent.com/60593545/114671156-ba0ed700-9d3e-11eb-8c80-91adcd2fcacf.png](https://user-images.githubusercontent.com/60593545/114671156-ba0ed700-9d3e-11eb-8c80-91adcd2fcacf.png)

## ✔아키텍쳐 구성도

![https://user-images.githubusercontent.com/60593545/114671209-cb57e380-9d3e-11eb-903d-7c2f603db5f8.png](https://user-images.githubusercontent.com/60593545/114671209-cb57e380-9d3e-11eb-903d-7c2f603db5f8.png)
