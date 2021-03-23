package com.ssafy.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Schema(description = "유튜브정보")
@Data
public class YoutubeDto extends Contents{

    private int youtubeId;
    private String contents;
//    private String title;
//    private String url;
//    private String date;
//    private int category;

}
