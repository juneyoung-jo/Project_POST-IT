package com.ssafy.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Schema(description = "유튜브정보")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "youtube")
@Builder
public class Youtube extends Contents {

    private String youtubeId;

}
