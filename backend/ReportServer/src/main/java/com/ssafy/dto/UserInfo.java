package com.ssafy.dto;


import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Schema(description = "유저정보")
@Data
public class UserInfo {


    private String name;

    private String profile;
}
