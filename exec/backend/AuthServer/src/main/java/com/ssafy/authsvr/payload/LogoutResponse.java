package com.ssafy.authsvr.payload;

import lombok.Builder;
import lombok.Getter;

@Getter
public class LogoutResponse extends ApiResponse<String>{

    @Builder
    public LogoutResponse(String msg, String data){
        super(msg,data);
    }

}
