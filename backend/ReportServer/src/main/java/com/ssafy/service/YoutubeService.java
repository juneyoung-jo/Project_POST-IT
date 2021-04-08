package com.ssafy.service;

import com.ssafy.entity.Youtube;
import com.ssafy.payload.YoutubeRequest;

import java.util.List;

public interface YoutubeService {

    List<Youtube> listYoutubeContents();

    List<Youtube> listInterestYoutubeContents(YoutubeRequest youtubeRequest);
}
