package com.ssafy.service;

import com.ssafy.entity.YoutubeDto;
import com.ssafy.payload.BlogResponse;
import com.ssafy.payload.YoutubeRequest;
import com.ssafy.payload.YoutubeResponse;

import java.util.List;

public interface YoutubeService {
    List<YoutubeResponse> listYoutubeContents();

    List<YoutubeResponse> listInterestYoutubeContents(YoutubeRequest youtubeRequest);
}
