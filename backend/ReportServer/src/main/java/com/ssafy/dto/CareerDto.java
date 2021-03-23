package com.ssafy.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Schema(description = "채용정보")
@Data
public class CareerDto {

    private int jobid;
    private String url;
    private String title;
    private int category;
    private String date;
}
