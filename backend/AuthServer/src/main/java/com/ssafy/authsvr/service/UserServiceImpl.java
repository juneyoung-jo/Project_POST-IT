package com.ssafy.authsvr.service;


import com.ssafy.authsvr.entity.User;
import com.ssafy.authsvr.payload.InfoUpdateRequest;
import com.ssafy.authsvr.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    UserRepository userRepository;

    @Override
    public User getCurrentUser(ObjectId id) {
        return userRepository.findById(id)
                .orElse(null);
    }

    @Override
    public User updateCurrentUser(ObjectId id, InfoUpdateRequest infoUpdateRequest) {
        User user = userRepository.findById(id)
                .orElse(null);
        if(user == null)
            return null;
        user.update(infoUpdateRequest); // 유저 정보 업데이트
        userRepository.save(user); // 업데이트된 유저 정보 디비 전송
        return user;
    }

}
