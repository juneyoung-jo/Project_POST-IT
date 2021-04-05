package com.ssafy.authsvr.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class InfoUpdateRequest {

    private String name;
    private List<Integer> categoryList;
    private List<Integer> blogList;
    private List<Integer> youtubeList;
    private List<Integer> jobList;
}
