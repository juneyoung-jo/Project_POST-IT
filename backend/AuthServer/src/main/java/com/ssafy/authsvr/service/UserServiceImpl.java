package com.ssafy.authsvr.service;


import com.ssafy.authsvr.entity.User;
import com.ssafy.authsvr.payload.InfoUpdateRequest;
import com.ssafy.authsvr.payload.UserForApp;
import com.ssafy.authsvr.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;


@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    UserRepository userRepository;

    @Override
    public UserForApp getCurrentUser(String id)
    {
        return userAdapter(userRepository.findById(id).get());
    }

    @Override
    public UserForApp updateCurrentUser(String id, InfoUpdateRequest infoUpdateRequest) {
        User user = userRepository.findById(id).get();
        return user == null ?
                null :
                userAdapter(userRepository.save(user.update(infoUpdateRequest)));

    }

    public UserForApp userAdapter(User user){
        return user == null ?
                null :
                UserForApp.builder()
                        .name(user.getName())
                        .email(user.getEmail())
                        .imageUrl(user.getImageUrl())
                        .blogList(Optional.ofNullable(user.getBlogList()).orElse(Collections.emptyList()))
                        .categoryList(Optional.ofNullable(user.getCategoryList()).orElse(Collections.emptyList()))
                        .youtubeList(Optional.ofNullable(user.getYoutubeList()).orElse(Collections.emptyList()))
                        .jobList(Optional.ofNullable(user.getJobList()).orElse(Collections.emptyList()))
                        .build()
                ;
    }

}
