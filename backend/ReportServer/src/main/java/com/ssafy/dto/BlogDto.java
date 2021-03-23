package com.ssafy.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Schema(description = "블로그 글 정보")
@Data
public class BlogDto {

    private int blogdId;
    private String title;
    private String url;
    private String contents;
    private int category;
    private String img;
    private String date;

}

