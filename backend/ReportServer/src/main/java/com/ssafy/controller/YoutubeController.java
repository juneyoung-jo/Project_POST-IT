package com.ssafy.controller;

import com.ssafy.entity.Youtube;
import com.ssafy.payload.YoutubeRequest;
import com.ssafy.payload.YoutubeResponse;
import com.ssafy.payload.YoutubeResponseList;
import com.ssafy.service.YoutubeService;
import com.ssafy.util.Adapter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = {"*"})
@RequestMapping("youtube")
@Slf4j
public class YoutubeController {

    private final YoutubeService youtubeService;

    public YoutubeController(YoutubeService youtubeService) {
        this.youtubeService = youtubeService;
    }

    // feat 1. 유튜브 컨텐츠 전체 리턴
    @GetMapping
    public ResponseEntity<?> listYoutubeContents() {
        log.info("listYoutubeContents methods Start : return List<YoutubeDto>");

        List<Youtube> data = null;
        data = youtubeService.listYoutubeContents();

        YoutubeResponseList response = Adapter.toYoutubeResponseList(data);

        log.info("listYoutubeContents methods End");

        return response.getData().size() == 0 ? ResponseEntity.status(HttpStatus.CREATED).body(response)
                : ResponseEntity.ok(response);
    }

    // feat 2. 북마크 한 유튜브 컨텐츠 리턴
    @PostMapping
    public ResponseEntity<?> listInterestYoutubeContents(@RequestBody YoutubeRequest youtubeRequest) {
        log.info("listInterestYoutubeContents methods Start : return List<BlogDto>");

        List<Youtube> data = youtubeService.listInterestYoutubeContents(youtubeRequest);

        YoutubeResponseList response = Adapter.toYoutubeResponseList(data);

        log.info("listInterestYoutubeContents methods End");
        return response.getData().size() == 0 ? ResponseEntity.status(HttpStatus.CREATED).body(response)
                : ResponseEntity.ok(response);
    }

}
