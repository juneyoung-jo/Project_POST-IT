package com.ssafy.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Schema(description = "채용정보")
@Data
public class Career extends Contents {

    private int jobid;

}
