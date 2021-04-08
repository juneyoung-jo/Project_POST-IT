package com.ssafy.payload;

import com.ssafy.entity.Youtube;
import lombok.Builder;


public class YoutubeResponse extends ApiResponse<Youtube> {

    @Builder
    public YoutubeResponse(final Youtube youtube, final String msg) {
        super(youtube, msg);
    }
}
