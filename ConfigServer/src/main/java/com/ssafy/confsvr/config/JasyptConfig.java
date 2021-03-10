package com.ssafy.confsvr.config;

import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.jasypt.encryption.StringEncryptor;
import org.jasypt.encryption.pbe.PooledPBEStringEncryptor;
import org.jasypt.encryption.pbe.config.SimpleStringPBEConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

@Configuration
public class JasyptConfig {

    @Bean("jasyptStringEncryptor")
    public StringEncryptor stringEncryptor(Environment environment){
        PooledPBEStringEncryptor encryptor = new PooledPBEStringEncryptor();
        SimpleStringPBEConfig config = new SimpleStringPBEConfig();
        config.setPassword(environment.getProperty("jasypt.encryptor.password")); // 패스워드 설정
        config.setAlgorithm("PBEWithSHA1ANdDESede"); // 암호화알고리즘 선택
        config.setKeyObtentionIterations("1000"); // 해싱 반복 횟수
        config.setPoolSize("1"); // 암호화 풀 사이즈 설정
        config.setProvider(new BouncyCastleProvider()); // 암호화 알고리즘 provider 설정
        config.setSaltGeneratorClassName("org.jasypt.salt.RandomSaltGenerator"); // 솔트 생성기 지정
        config.setStringOutputType("base64"); // 출력 타입 지
        encryptor.setConfig(config);
        return encryptor;
    }
}

