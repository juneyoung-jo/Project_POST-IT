package com.ssafy.service;

import com.ssafy.entity.YoutubeDto;
import com.ssafy.payload.YoutubeResponse;

import java.util.List;

public interface YoutubeService {
    List<YoutubeResponse> listYoutubeContents();
}
