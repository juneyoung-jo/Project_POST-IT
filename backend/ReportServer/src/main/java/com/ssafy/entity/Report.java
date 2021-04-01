package com.ssafy.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Schema(description = "주간 보고서 정보")
@Data
@Document(collection = "report")
public class Report {

    private ObjectId id;
    private Object common_report;
    private Object category_report;
    
}
