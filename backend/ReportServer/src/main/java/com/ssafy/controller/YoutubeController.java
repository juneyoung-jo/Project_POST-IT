package com.ssafy.controller;

import com.ssafy.entity.YoutubeDto;
import com.ssafy.payload.BlogRequest;
import com.ssafy.payload.BlogResponse;
import com.ssafy.payload.YoutubeRequest;
import com.ssafy.payload.YoutubeResponse;
import com.ssafy.service.YoutubeService;
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

    @GetMapping
    public ResponseEntity<Map<String, Object>> listYoutubeContents() {
        log.info("listYoutubeContents methods Start : return List<YoutubeDto>");

        ResponseEntity<Map<String, Object>> resEntity = null;
        Map<String, Object> map = new HashMap<String, Object>();
        List<YoutubeResponse> data = null;
        try {
            data = youtubeService.listYoutubeContents();
            map.put("msg", "success");
            map.put("data", data);
            resEntity = new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);

        } catch (NullPointerException e) {
            log.debug("listYoutubeContents methods Error : NullPointerError");
            map.put("msg", "fail");
            resEntity = new ResponseEntity<Map<String, Object>>(map, HttpStatus.INTERNAL_SERVER_ERROR);
            e.printStackTrace();
        }

        log.info("listYoutubeContents methods End");
        return resEntity;

    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> listInterestYoutubeContents(@RequestBody YoutubeRequest youtubeRequest){
        log.info("listInterestYoutubeContents methods Start : return List<BlogDto>");

        ResponseEntity<Map<String, Object>> resEntity = null;
        Map<String, Object> map = new HashMap<String, Object>();
        List<YoutubeResponse> data = null;
        try {
            data = youtubeService.listInterestYoutubeContents(youtubeRequest);
            map.put("msg", "success");
            map.put("data", data);
            resEntity = new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);

        } catch (NullPointerException e) {
            log.debug("listInterestYoutubeContents methods Error : NullPointerError");
            map.put("msg", "fail");
            resEntity = new ResponseEntity<Map<String, Object>>(map, HttpStatus.INTERNAL_SERVER_ERROR);
            e.printStackTrace();
        }

        log.info("listInterestYoutubeContents methods End");
        return resEntity;
    }

}
