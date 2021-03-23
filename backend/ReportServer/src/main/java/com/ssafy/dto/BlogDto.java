package com.ssafy.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Schema(description = "블로그 글 정보")
@Document(collection = "blog")
@Data
public class BlogDto {

    private int blogId;
    private String title;
    private String url;
    private String contents;
    private int category;
    private String img;
    private String date;

}

