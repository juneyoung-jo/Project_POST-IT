package com.ssafy.service;

import com.ssafy.entity.BlogDto;
import com.ssafy.payload.Adapter;
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
    public List<BlogResponse> listBlogContents() {
        /*
        1. findAll함수로 List<BlogDto>를 가져옴.
        2. Optinal로 null체크
            1. null -> 빈List만들어서 리턴
            2. 아닐경우 스트림으로 변경 -> 최신순으로 정렬 -> list형태로 변환
            3. Adapter를 이용하여 Response Entity로 변환
        */
        return Optional.ofNullable(blogRepository.findAll()).orElseGet(Collections::emptyList)
                .stream()
                .sorted(((o1, o2) -> o2.getDate().compareTo(o1.getDate())))
                .map(o->Adapter.toBlogResponse(o))
                .collect(Collectors.toList());
    }
}
