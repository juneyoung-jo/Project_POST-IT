package com.ssafy.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Schema(description = "유튜브정보")
@Data
public class YoutubeDto {

    private int youtubeId;
    private String title;
    private String url;
    private String contents;
    private int category;
    private String date;

}
