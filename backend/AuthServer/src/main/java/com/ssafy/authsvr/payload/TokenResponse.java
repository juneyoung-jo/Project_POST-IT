package com.ssafy.authsvr.payload;

import lombok.Builder;
import lombok.Getter;

@Getter
public class TokenResponse extends ApiResponse<String> {

    @Builder
    public TokenResponse(String msg, String token) {
        super(msg, token);
    }
}
