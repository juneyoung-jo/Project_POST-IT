package com.ssafy.authsvr.payload;


import lombok.Builder;

public class UserResponse extends ApiResponse<UserForApp>{

    @Builder
    public UserResponse(String msg, UserForApp user){
        super(msg, user);
    }
}
