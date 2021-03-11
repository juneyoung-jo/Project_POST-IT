package com.ssafy.confsvr;

import org.jasypt.encryption.StringEncryptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class HelloContorller {

    @Value("${spring.cloud.config.server.git.password}")
    String passwd;

    @Autowired
    private StringEncryptor jasyptStringEncryptor;

    @PostMapping("/encrypts")
    public String pwdEncrypt(@RequestBody Map<String, String> pwd){
//        log.info("### encode : {}", pwd.get("pwd"));
        System.out.println("### encode : " + pwd.get("pwd"));
//        return jasyptStringEncryptor.encrypt(pwd.get("pwd"));
        return passwd;
    }

    @GetMapping("/decrypt/{pwd}")
    public String pwdDecrypt(@PathVariable String pwd){
        return jasyptStringEncryptor.decrypt(pwd);
    }

}
