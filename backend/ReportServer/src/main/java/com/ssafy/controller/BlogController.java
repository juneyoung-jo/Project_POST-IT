package com.ssafy.controller;

import com.ssafy.entity.BlogDto;
import com.ssafy.entity.UserInfoDto;
import com.ssafy.payload.Adapter;
import com.ssafy.payload.BlogResponse;
import com.ssafy.service.BlogService;
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

    @GetMapping
    public ResponseEntity<Map<String, Object>> listBlogContents() {
        log.info("listBlogContents methods Start : return List<BlogDto>");

        ResponseEntity<Map<String, Object>> resEntity = null;
        Map<String, Object> map = new HashMap<String, Object>();
        List<BlogResponse> data = null;
        try {
            data = blogService.listBlogContents();
            map.put("msg", "success");
            map.put("data", data);
            resEntity = new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);

        } catch (NullPointerException e) {
            log.debug("listBlogContents methods Error : NullPointerError");
            map.put("msg", "fail");
            resEntity = new ResponseEntity<Map<String, Object>>(map, HttpStatus.INTERNAL_SERVER_ERROR);
            e.printStackTrace();
        }

        log.info("listBlogContents methods End");
        return resEntity;

    }

    @PostMapping
    public List<Integer> listInterestBlogContents(@RequestBody UserInfoDto category){
        System.out.println(category.toString());
        return null;
    }
}
