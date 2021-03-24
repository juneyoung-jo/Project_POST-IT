package com.ssafy.controller;

import com.ssafy.entity.YoutubeDto;
import com.ssafy.service.YoutubeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

        try {
            List<YoutubeDto> data = youtubeService.listYoutubeContents();
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

}
