package com.ssafy.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Schema(description = "유튜브정보")
@Data
@Document(collection = "youtube")
@Builder
public class YoutubeDto extends Contents{

    private int youtubeId;
    private String contents;

}
