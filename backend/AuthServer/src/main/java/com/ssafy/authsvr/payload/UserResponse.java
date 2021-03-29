package com.ssafy.authsvr.payload;


import com.ssafy.authsvr.entity.User;
import lombok.Builder;

public class UserResponse extends ApiResponse<User>{

    @Builder
    public UserResponse(String msg, User user){
        super(msg, user);
    }
}
