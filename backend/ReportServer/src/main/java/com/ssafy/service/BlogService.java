package com.ssafy.service;

import com.ssafy.entity.Blog;
import com.ssafy.payload.BlogRequest;
import com.ssafy.payload.BlogResponse;

import java.util.List;

public interface BlogService {

    List<Blog> listBlogContents();

    List<Blog> listInterestBlogContents(BlogRequest blogRequest);

    List<Blog> listCategoryBlogContents(int category);
}
