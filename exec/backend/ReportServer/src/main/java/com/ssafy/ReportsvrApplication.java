package com.ssafy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class ReportsvrApplication {

    public static void main(String[] args) {
        SpringApplication.run(ReportsvrApplication.class, args);
    }

}
