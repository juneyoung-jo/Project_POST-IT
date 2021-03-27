package com.ssafy.payload;

import lombok.Data;

import java.util.List;

@Data
public class BlogRequest {

    List<Integer> category;
}
