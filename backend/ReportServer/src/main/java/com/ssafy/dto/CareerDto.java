package com.ssafy.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Schema(description = "채용정보")
@Data
public class CareerDto extends Contents{

    private int jobid;
//    private String title;
//    private String url;
//    private String date;
//    private int category;

}
