package com.ssafy.controller;

import com.ssafy.dto.BlogDto;
import com.ssafy.service.BlogService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.ws.Response;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = {"*"})
@RequestMapping("blog")
@Slf4j
public class BlogController {

    private final BlogService blogService;

    public BlogController(BlogService blogService){
        this.blogService = blogService;
    }

    @GetMapping
    public ResponseEntity<Map<String, Object>> listBlogContents() {
        log.info("listBlogContents methods start : return List<blog>");

        ResponseEntity<Map<String, Object>> resEntity = null;
        Map<String, Object> map = new HashMap<String, Object>();

        List<BlogDto> data = blogService.listBlogcontents();
        map.put("msg","success");
        map.put("data",data);
        resEntity = new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);

        return resEntity;

    }
}
