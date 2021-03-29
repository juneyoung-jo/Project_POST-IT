package com.ssafy.authsvr.controller;

import com.ssafy.authsvr.exception.ResourceNotFoundException;
import com.ssafy.authsvr.entity.User;
import com.ssafy.authsvr.payload.ApiResponse;
import com.ssafy.authsvr.payload.InfoUpdateRequest;
import com.ssafy.authsvr.payload.UserResponse;
import com.ssafy.authsvr.repository.UserRepository;
import com.ssafy.authsvr.security.CurrentUser;
import com.ssafy.authsvr.security.RestAuthenticationEntryPoint;
import com.ssafy.authsvr.security.UserPrincipal;
import com.ssafy.authsvr.service.UserService;
import lombok.AllArgsConstructor;
import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@AllArgsConstructor
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;
    private static final Logger logger = LoggerFactory.getLogger(RestAuthenticationEntryPoint.class);

    // feat 1. 로그인 성공 -> 리턴값 : nickName, profile, category, blogId, youtubeId, jobId
    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        logger.info("getCurrentUser Start : return User");
        logger.info("getCurrentUser End");
        return ResponseEntity.ok(userService.getCurrentUser(userPrincipal.getId()));
    }


    // feat 2. 북마크들 추가/수정/삭제 : nickName, category, blogId, youtubeId, jobId, blog, youtube, job, category 즐겨찾기 변경
    @PostMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> updateCurrentUser(@CurrentUser UserPrincipal userPrincipal, @RequestBody InfoUpdateRequest infoUpdateRequest){
        logger.info("updateCurrentUser Start: return User");
        logger.info("updateCurrentUser End");
        return ResponseEntity.ok(userService.updateCurrentUser(userPrincipal.getId(), infoUpdateRequest));
    }




}
