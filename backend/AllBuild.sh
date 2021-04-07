!#/bin/sh

echo "+++ AuthServer"
cd ./AuthServer && ./gradlew clean build
echo "+++ ConfigServer"
cd ../ConfigServer && ./gradlew clean build
echo "+++ EurekaServer"
cd ../EurekaServer && ./gradlew clean build
echo "+++ ZuulServer"
cd ../ZuulServer && ./gradlew clean build
echo "+++ ReportServer"
cd ../ReportServer && ./gradlew clean build