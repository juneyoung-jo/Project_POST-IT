package com.ssafy.authsvr;

import com.ssafy.authsvr.config.AppProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class AuthsvrApplication {

    public static void main(String[] args) {
        SpringApplication.run(AuthsvrApplication.class, args);
    }

}
