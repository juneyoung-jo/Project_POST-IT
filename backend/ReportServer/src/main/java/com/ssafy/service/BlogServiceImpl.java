package com.ssafy.service;

import com.ssafy.dto.BlogDto;
import com.ssafy.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogServiceImpl implements BlogService {


    private final BlogRepository blogRepository;

    public BlogServiceImpl(BlogRepository blogRepository){
        this.blogRepository = blogRepository;
    }

    @Override
    public List<BlogDto> listBlogcontents() {
        return blogRepository.findAll();
    }
}
