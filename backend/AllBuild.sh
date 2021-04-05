!#/bin/sh

echo "+++ AuthServer"
cd /Users/hindsight/Desktop/dockertest/backend/AuthServer && ./gradlew clean build
echo "+++ ConfigServer"
cd /Users/hindsight/Desktop/dockertest/backend/ConfigServer && ./gradlew clean build
echo "+++ EurekaServer"
cd /Users/hindsight/Desktop/dockertest/backend/EurekaServer && ./gradlew clean build
echo "+++ ZuulServer"
cd /Users/hindsight/Desktop/dockertest/backend/ZuulServer && ./gradlew clean build
echo "+++ ReportServer"
cd /Users/hindsight/Desktop/dockertest/backend/ReportServer && ./gradlew clean build