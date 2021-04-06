package com.ssafy.authsvr.payload;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
public class UserForApp {

    private String name;
    private String email;
    private String imageUrl;
    private List<String> categoryList;
    private List<String> blogList;
    private List<String> youtubeList;
    private List<String> jobList;
}
