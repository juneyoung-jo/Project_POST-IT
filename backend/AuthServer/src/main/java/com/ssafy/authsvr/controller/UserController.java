package com.ssafy.authsvr.controller;

import com.ssafy.authsvr.exception.ResourceNotFoundException;
import com.ssafy.authsvr.entity.User;
import com.ssafy.authsvr.repository.UserRepository;
import com.ssafy.authsvr.security.CurrentUser;
import com.ssafy.authsvr.security.UserPrincipal;
import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }

    // feat 1. 로그인 성공 -> 리턴값 : nickName, profile, category, blogId, youtubeId, jobId

    /* feat 2. 북마크들 추가/수정/삭제 : nickName, category, blogId, youtubeId, jobId
     blog, youtube, job, category 즐겨찾기 변경

    (All Nullable)
     {
        nickName : "",
        category : [],
        blogList : [],
        youtubeList: [],
        jobList: [],
     }
     */

    /* feat 3.

     */


}
