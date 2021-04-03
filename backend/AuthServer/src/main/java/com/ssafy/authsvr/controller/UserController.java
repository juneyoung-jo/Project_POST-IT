package com.ssafy.authsvr.controller;

import com.ssafy.authsvr.payload.InfoUpdateRequest;
import com.ssafy.authsvr.payload.UserResponse;
import com.ssafy.authsvr.security.CurrentUser;
import com.ssafy.authsvr.security.UserPrincipal;
import com.ssafy.authsvr.service.UserService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    // feat 1. 로그인 성공 -> 리턴값 : nickName, profile, category, blogId, youtubeId, jobId
    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        logger.info("getCurrentUser Start : return User");

        UserResponse response = UserResponse.builder()
                .msg("Success")
                .user(userService.getCurrentUser(userPrincipal.getId()))
                .build()
                ;

        logger.info("getCurrentUser End");

        return response.getData() != null ?
                ResponseEntity.ok(response) : ResponseEntity.noContent().build();
    }


    // feat 2. 북마크들 추가/수정/삭제 : nickName, category, blogId, youtubeId, jobId, blog, youtube, job, category 즐겨찾기 변경
    @PostMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> updateCurrentUser(@CurrentUser UserPrincipal userPrincipal, @RequestBody InfoUpdateRequest infoUpdateRequest){
        logger.info("updateCurrentUser Start: return User");

        UserResponse response = UserResponse.builder()
                .msg("Success")
                .user(userService.updateCurrentUser(userPrincipal.getId(), infoUpdateRequest))
                .build()
                ;

        logger.info("updateCurrentUser End");

        return response.getData() != null ?
                ResponseEntity.ok(response) : ResponseEntity.noContent().build();
    }




}
