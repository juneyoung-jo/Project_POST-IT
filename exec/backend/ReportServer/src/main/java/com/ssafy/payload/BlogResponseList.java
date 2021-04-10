package com.ssafy.payload;

import com.ssafy.entity.Blog;
import lombok.Builder;

import java.util.List;

public class BlogResponseList extends ApiResponse<List<Blog>> {

    @Builder
    public BlogResponseList(final List<Blog> data, final String msg) {
        super(data, msg);
    }
}
