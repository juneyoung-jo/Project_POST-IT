package com.ssafy.payload;

import com.ssafy.entity.YoutubeDto;
import lombok.Builder;


public class YoutubeResponse extends ApiResponse<YoutubeDto> {

    @Builder
    public YoutubeResponse(final YoutubeDto youtubeDto) {
        super(youtubeDto);
    }
}
