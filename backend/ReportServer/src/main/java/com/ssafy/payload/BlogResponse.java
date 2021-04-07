package com.ssafy.payload;

import com.ssafy.entity.Blog;
import lombok.Builder;

public class BlogResponse extends ApiResponse<Blog> {

    @Builder
    public BlogResponse(final Blog blog, final String msg) {
        super(blog, msg);
    }

}
