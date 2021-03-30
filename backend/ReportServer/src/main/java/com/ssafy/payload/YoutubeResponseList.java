package com.ssafy.payload;

import com.ssafy.entity.Youtube;
import lombok.Builder;

import java.util.List;

public class YoutubeResponseList extends ApiResponse<List<Youtube>> {

    @Builder
    public YoutubeResponseList(final List<Youtube> data, final String msg) {
        super(data, msg);
    }
}
