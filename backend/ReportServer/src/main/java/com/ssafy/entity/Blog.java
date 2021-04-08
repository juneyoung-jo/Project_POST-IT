package com.ssafy.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Schema(description = "블로그 글 정보")
@Document(collection = "blog")
@Data
public class Blog extends Contents {

    private int blogId;
    private String image;

}


