package com.ssafy.payload;


import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class ReportResponse {

    private Object common_report;
    private Object category_report;
    private String date;

}
