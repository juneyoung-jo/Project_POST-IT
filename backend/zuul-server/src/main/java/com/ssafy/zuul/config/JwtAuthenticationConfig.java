package com.ssafy.zuul.config;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;

@Getter
public class JwtAuthenticationConfig {

    @Value("${jwt.access.expiration}")
    private int access_expiration;

    @Value("${jwt.refresh.expiration}")
    private int refresh_expiration;

    @Value("${jwt.secret}")
    private String secret;
}
