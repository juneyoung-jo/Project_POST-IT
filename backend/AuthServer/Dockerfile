FROM java:8
EXPOSE 8443
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java", "-jar", "/app.jar","-Dspring.profiles.active=dev"]
