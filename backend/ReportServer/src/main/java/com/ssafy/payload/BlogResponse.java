package com.ssafy.payload;

import com.ssafy.entity.BlogDto;
import lombok.Builder;

public class BlogResponse extends ApiResponse<BlogDto> {

    @Builder
    public BlogResponse(final BlogDto blogDto) {
        super(blogDto);
    }

}
