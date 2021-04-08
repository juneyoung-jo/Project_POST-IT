package com.ssafy.controller;

import com.ssafy.entity.Blog;
import com.ssafy.payload.BlogRequest;
import com.ssafy.payload.BlogResponseList;
import com.ssafy.service.BlogService;
import com.ssafy.util.Adapter;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.*;

@Tag(name = "Blog", description = "Blog API")
@RestController
@CrossOrigin(origins = {"*"})
@RequestMapping("blog")
@Slf4j
public class BlogController {

    private final BlogService blogService;

    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    @Operation(summary = "블로그 글 컨텐츠 전체 리턴", description = "블로그 글 컨텐츠 전체를 조회합니다.")
    @GetMapping
    public ResponseEntity<?> listBlogContents() {
        log.info("listBlogContents methods Start : return List<BlogDto>");

        List<Blog> data = blogService.listBlogContents();

        BlogResponseList response = Adapter.toBlogResponseList(data);

        log.info("listBlogContents methods End");
        return CollectionUtils.isEmpty(response.getData()) ? ResponseEntity.status(HttpStatus.CREATED).body(response)
                : ResponseEntity.ok(response);

    }

    @Operation(summary = "북마크 한 블로그 글 컨텐츠 전체 리턴", description = "북마크 한 블로그 글 컨텐츠 전체를 조회합니다.")
    @PostMapping
    public ResponseEntity<?> listInterestBlogContents(@RequestBody BlogRequest blogRequest) {
        log.info("listInterestBlogContents methods Start : return List<BlogDto>");

        List<Blog> data = blogService.listInterestBlogContents(blogRequest);

        BlogResponseList response = Adapter.toBlogResponseList(data);

        log.info("listInterestBlogContents methods End");
        return CollectionUtils.isEmpty(response.getData()) ? ResponseEntity.status(HttpStatus.CREATED).body(response)
                : ResponseEntity.ok(response);
    }

    @Operation(summary = "기업별 블로그 글 컨텐츠 전체 리턴", description = "기업별 블로그 글 컨텐츠 전체를 조회합니다.")
    @GetMapping("category")
    public ResponseEntity<?> listCategoryBlogContents(@RequestParam int category) {
        log.info("listCategoryBlogContents methods Start : return List<BlogDto>");
        List<Blog> data = blogService.listCategoryBlogContents(category);

        BlogResponseList response = Adapter.toBlogResponseList(data);

        log.info("listCategoryBlogContents methods End");
        return CollectionUtils.isEmpty(response.getData()) ? ResponseEntity.status(HttpStatus.CREATED).body(response)
                : ResponseEntity.ok(response);
    }


}
