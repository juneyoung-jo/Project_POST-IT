package com.ssafy.entity;

import lombok.Data;

@Data
public abstract class Contents {

    private String id;
    private String title;
    private String url;
    private String date;
    private int category;
}
