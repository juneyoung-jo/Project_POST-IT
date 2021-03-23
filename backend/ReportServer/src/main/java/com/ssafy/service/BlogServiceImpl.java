package com.ssafy.service;

import com.ssafy.dto.BlogDto;
import com.ssafy.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<BlogDto> listBlogContents() {
        return Optional.ofNullable(blogRepository.findAll()).orElseGet(Collections::emptyList)
                .stream()
                .sorted(((o1, o2) -> o2.getDate().compareTo(o1.getDate())))
                .collect(Collectors.toList());
    }
}
