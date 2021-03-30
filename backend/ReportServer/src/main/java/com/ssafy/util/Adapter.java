package com.ssafy.util;

import com.ssafy.entity.Blog;
import com.ssafy.entity.Youtube;
import com.ssafy.payload.BlogResponse;
import com.ssafy.payload.BlogResponseList;
import com.ssafy.payload.YoutubeResponse;
import com.ssafy.payload.YoutubeResponseList;

import java.util.List;

public class Adapter {

    public static BlogResponse toBlogResponse(final Blog blog) {
        return BlogResponse.builder()
                .blog(blog)
                .build();
    }

    public static BlogResponseList toBlogResponseList(final List<Blog> data) {
        return BlogResponseList.builder()
                .data(data)
                .msg("Success")
                .build();
    }

    public static YoutubeResponse toYoutubeResponse(final Youtube youtube) {
        return YoutubeResponse.builder()
                .youtube(youtube)
                .build();
    }

    public static YoutubeResponseList toYoutubeResponseList(final List<Youtube> data) {
        return YoutubeResponseList.builder()
                .data(data)
                .msg("Success")
                .build();
    }
}
