package com.ssafy.controller;

import com.ssafy.entity.Blog;
import com.ssafy.payload.BlogRequest;
import com.ssafy.payload.BlogResponse;
import com.ssafy.payload.BlogResponseList;
import com.ssafy.payload.YoutubeResponseList;
import com.ssafy.service.BlogService;
import com.ssafy.util.Adapter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin(origins = {"*"})
@RequestMapping("blog")
@Slf4j
public class BlogController {

    private final BlogService blogService;

    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    // feat 1. 블로그 글 컨텐츠 전체 리턴
    @GetMapping
    public ResponseEntity<?> listBlogContents() {
        log.info("listBlogContents methods Start : return List<BlogDto>");

        List<Blog> data = blogService.listBlogContents();

        BlogResponseList response = Adapter.toBlogResponseList(data);

        log.info("listBlogContents methods End");
        return response.getData().size() == 0 ? ResponseEntity.status(HttpStatus.CREATED).body(response)
                : ResponseEntity.ok(response);

    }

    // feat 2. 북마크 한 블로그 글 컨텐츠 전체 리턴
    @PostMapping
    public ResponseEntity<?> listInterestBlogContents(@RequestBody BlogRequest blogRequest) {
        log.info("listInterestBlogContents methods Start : return List<BlogDto>");

        List<Blog> data = blogService.listInterestBlogContents(blogRequest);

        BlogResponseList response = Adapter.toBlogResponseList(data);

        log.info("listInterestBlogContents methods End");
        return response.getData().size() == 0 ? ResponseEntity.status(HttpStatus.CREATED).body(response)
                : ResponseEntity.ok(response);
    }
}
