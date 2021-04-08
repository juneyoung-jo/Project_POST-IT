package com.ssafy.service;

import com.ssafy.entity.Blog;
import com.ssafy.util.Adapter;
import com.ssafy.payload.BlogRequest;
import com.ssafy.payload.BlogResponse;
import com.ssafy.repository.BlogRepository;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BlogServiceImpl implements BlogService {


    private final BlogRepository blogRepository;

    public BlogServiceImpl(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    @Override
    public List<Blog> listBlogContents() {
        /*
        1. findAll함수로 List<BlogDto>를 가져옴.
            1. null -> 빈List만들어서 리턴
            2. 아닐경우 스트림으로 변경 -> 최신순으로 정렬 -> list형태로 변환
        */
        return blogRepository.findAll()
                .stream()
                .sorted(((o1, o2) -> o2.getDate().compareTo(o1.getDate())))
                .collect(Collectors.toList());
    }

    @Override
    public List<Blog> listInterestBlogContents(BlogRequest blogRequest) {
        /*
        1. findByCategoryIn함수로 blogRequest의 category List와 맞는 List<BlogDto>를 가져옴.
            1. null -> 빈 List만들어서 리턴
            2. 아닐경우 스트림으로 변경 -> 최신순으로 정렬 -> list형태로 변환
        */
        return blogRepository.findByIdIn(blogRequest.getId())
                .stream()
                .sorted(((o1, o2) -> o2.getDate().compareTo(o1.getDate())))
                .collect(Collectors.toList());
    }

    @Override
    public List<Blog> listCategoryBlogContents(int category) {
        return blogRepository.findAll()
                .stream()
                .filter(o->o.getCategory() == category)
                .sorted((o1, o2) -> o2.getDate().compareTo(o1.getDate()))
                .collect(Collectors.toList());
    }
}
