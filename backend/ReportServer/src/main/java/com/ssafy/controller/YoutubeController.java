package com.ssafy.controller;

import com.ssafy.entity.Youtube;
import com.ssafy.payload.YoutubeRequest;
import com.ssafy.payload.YoutubeResponseList;
import com.ssafy.service.YoutubeService;
import com.ssafy.util.Adapter;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Tag(name = "Youtube", description = "Youtube API")
@RestController
@CrossOrigin(origins = {"*"})
@RequestMapping("youtube")
@Slf4j
public class YoutubeController {

    private final YoutubeService youtubeService;

    public YoutubeController(YoutubeService youtubeService) {
        this.youtubeService = youtubeService;
    }

    @Operation(summary = "유튜브 컨텐츠 전체 리턴", description = "유튜브 컨텐츠 전체를 조회합니다.")
    @GetMapping
    public ResponseEntity<?> listYoutubeContents() {
        log.info("listYoutubeContents methods Start : return List<YoutubeDto>");

        List<Youtube> data = null;
        data = youtubeService.listYoutubeContents();

        YoutubeResponseList response = Adapter.toYoutubeResponseList(data);

        log.info("listYoutubeContents methods End");

        return CollectionUtils.isEmpty(response.getData()) ? ResponseEntity.status(HttpStatus.CREATED).body(response)
                : ResponseEntity.ok(response);
    }

    @Operation(summary = "북마크 한 유튜브 컨텐츠 리턴", description = "북마크 한 유튜브 컨텐츠를 조회합니다.")
    @PostMapping
    public ResponseEntity<?> listInterestYoutubeContents(@RequestBody YoutubeRequest youtubeRequest) {
        log.info("listInterestYoutubeContents methods Start : return List<BlogDto>");

        List<Youtube> data = youtubeService.listInterestYoutubeContents(youtubeRequest);

        YoutubeResponseList response = Adapter.toYoutubeResponseList(data);

        log.info("listInterestYoutubeContents methods End");
        return CollectionUtils.isEmpty(response.getData()) ? ResponseEntity.status(HttpStatus.CREATED).body(response)
                : ResponseEntity.ok(response);
    }

    @Operation(summary = "채널별 유튜브 컨텐츠 리턴", description = "채널별 유튜브 컨텐츠를 조회합니다.")
    @GetMapping("category")
    public ResponseEntity<?> listCategoryYoutubeContents(@RequestParam List<Integer> categories) {
        log.info("listCategoryYoutubeContents methods Start : return List<BlogDto>");

        List<Youtube> data = youtubeService.listCategoryYoutubeContents(categories);

        YoutubeResponseList response = Adapter.toYoutubeResponseList(data);

        log.info("listCategoryYoutubeContents methods End");
        return CollectionUtils.isEmpty(response.getData()) ? ResponseEntity.status(HttpStatus.CREATED).body(response)
                : ResponseEntity.ok(response);
    }
}
