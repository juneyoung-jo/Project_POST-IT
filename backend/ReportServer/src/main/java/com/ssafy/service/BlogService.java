package com.ssafy.service;

import com.ssafy.payload.BlogResponse;

import java.util.List;

public interface BlogService {
    List<BlogResponse> listBlogContents();
}
