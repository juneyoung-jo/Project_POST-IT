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
        /*
        1. findAll함수로 List<BlogDto>를 가져옴.
        2. Optinal로 null체크
            1. null -> 빈List만들어서 리턴
            2. 아닐경우 스트림으로 변경 -> 최신순으로 정렬 -> list형태로 변환 후 리턴
        */
        return Optional.ofNullable(blogRepository.findAll()).orElseGet(Collections::emptyList)
                .stream()
                .sorted(((o1, o2) -> o2.getDate().compareTo(o1.getDate())))
                .collect(Collectors.toList());
    }
}
