package com.ssafy.payload;

import com.ssafy.entity.BlogDto;
import com.ssafy.entity.YoutubeDto;

public class Adapter {

    public static BlogResponse toBlogResponse(final BlogDto blogDto){
        return BlogResponse.builder()
                .blogDto(blogDto)
                .build();
    }

    public static YoutubeResponse toYoutubeResponse(final YoutubeDto youtubeDto){
        return YoutubeResponse.builder()
                .youtubeDto(youtubeDto)
                .build();

    }
}
