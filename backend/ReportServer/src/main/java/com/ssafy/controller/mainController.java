package com.ssafy.controller;

import com.ssafy.dto.UserInfo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequestMapping("main")
public class mainController {

    @GetMapping("/test")
    public UserInfo test(){
        log.info("리포트 api");
        UserInfo userInfo = new UserInfo();
        userInfo.setName("young");
        return userInfo;
    }
}
