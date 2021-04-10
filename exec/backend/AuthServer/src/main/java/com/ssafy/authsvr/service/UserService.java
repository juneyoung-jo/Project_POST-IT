package com.ssafy.authsvr.service;

import com.ssafy.authsvr.entity.User;
import com.ssafy.authsvr.payload.InfoUpdateRequest;
import com.ssafy.authsvr.payload.UserForApp;
import com.ssafy.authsvr.payload.UserResponse;
import org.bson.types.ObjectId;

public interface UserService {

    UserForApp getCurrentUser(String id);
    UserForApp updateCurrentUser(String id, InfoUpdateRequest infoUpdateRequest);
}
