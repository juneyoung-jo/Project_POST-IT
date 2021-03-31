package com.ssafy.authsvr.payload;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
public class UserForApp {

    private String email;
    private String imageUrl;
    private List<Integer> categoryList;
    private List<Integer> blogList;
    private List<Integer> youtubeList;
    private List<Integer> jobList;
}
