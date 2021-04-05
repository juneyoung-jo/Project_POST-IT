package com.ssafy.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "채용정보")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Career extends Contents {

    private int jobid;

}
