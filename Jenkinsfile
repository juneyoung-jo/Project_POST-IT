pipeline {
  agent any
  stages {
    stage('ConfigServer') {
      steps {
        sh '''cd ./backend/ConfigServer
./gradlew clean build'''
        sh '''cd ./backend/ConfigServer
docker build -t postit/configserver .'''
        sh '''#!/bin/bash
VAR1=`docker ps -q --filter="name=postit-configserver"`
if [ ${#VAR1} -eq 0 ];
then
        echo "No Container"
else
        docker stop postit-configserver && docker rm postit-configserver

fi'''
        sh 'docker run -p 8888:8888 -d --name=postit-configserver postit/configserver'
        sh 'docker rmi -f $(docker images -f "dangling=true" -q) || true'
      }
    }

    stage('EurekaServer') {
      parallel {
        stage('EurekaServer') {
          steps {
            sh '''cd ./backend/EurekaServer
./gradlew clean build'''
            sh '''cd ./backend/EurekaServer
docker build -t postit/eurekaserver .'''
            sh '''#!/bin/bash
VAR1=`docker ps -q --filter="name=postit-eurekaserver"`
if [ ${#VAR1} -eq 0 ];
then
        echo "No Container"
else
        docker stop postit-eurekaserver && docker rm postit-eurekaserver

fi'''
            sh 'docker run -p 8761:8761 -d --name=postit-eurekaserver postit/eurekaserver'
            sh 'docker rmi -f $(docker images -f "dangling=true" -q) || true'
          }
        }

        stage('ZuulServer') {
          steps {
            sh '''cd ./backend/zuul-server
./gradlew clean build'''
            sh '''cd ./backend/zuul-server
docker build -t postit/zuulserver .'''
            sh '''#!/bin/bash
VAR1=`docker ps -q --filter="name=postit-zuulserver"`
if [ ${#VAR1} -eq 0 ];
then
        echo "No Container"
else
        docker stop postit-zuulserver && docker rm postit-zuulserver

fi'''
            sh 'docker run -p 5555:5555 -d --name=postit-zuulserver postit/zuulserver'
            sh 'docker rmi -f $(docker images -f "dangling=true" -q) || true'
          }
        }

      }
    }

    stage('AuthServer') {
      parallel {
        stage('AuthServer') {
          steps {
            sh '''cd ./backend/AuthServer
./gradlew clean build'''
            sh '''cd ./backend/AuthServer
docker build -t postit/authserver .'''
            sh '''#!/bin/bash
VAR1=`docker ps -q --filter="name=postit-authserver"`
if [ ${#VAR1} -eq 0 ];
then
        echo "No Container"
else
        docker stop postit-authserver && docker rm postit-authserver

fi'''
            sh 'docker run -p 8443:8443 -d --name=postit-authserver postit/authserver'
            sh 'docker rmi -f $(docker images -f "dangling=true" -q) || true'
          }
        }

        stage('ReportServer') {
          steps {
            sh '''cd ./backend/ReportServer
./gradlew clean build'''
            sh '''cd ./backend/ReportServer
docker build -t postit/reportserver .'''
            sh '''#!/bin/bash
VAR1=`docker ps -q --filter="name=postit-reportserver"`
if [ ${#VAR1} -eq 0 ];
then
        echo "No Container"
else
        docker stop postit-reportserver && docker rm postit-reportserver

fi'''
            sh 'docker run -p 8000:8000 -d --name=postit-reportserver postit/reportserver'
            sh 'docker rmi -f $(docker images -f "dangling=true" -q) || true'
          }
        }

      }
    }

  }
}