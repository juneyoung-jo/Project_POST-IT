package com.ssafy.confsvr;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer // 컨피그 서버 설정
public class ConfsvrApplication {

    public static void main(String[] args) {
        SpringApplication.run(ConfsvrApplication.class, args);
    }

}
