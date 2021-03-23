package com.ssafy.dto;


import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.util.List;

@Schema(description = "유저정보")
@Data
public class UserInfoDto {

    private String uid;
    private String nickName;
    private List<Integer> blogId;
    private List<Integer> youtubeId;
    private List<Integer> jobId;
    private List<Integer> category;
    private String profile;
}
