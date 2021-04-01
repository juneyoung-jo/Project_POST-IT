package com.ssafy.payload;

import lombok.Builder;

import java.util.List;

public class ReportResponseList extends ApiResponse<List<ReportResponse>> {

    @Builder
    public ReportResponseList(final List<ReportResponse> data, final String msg) {
        super(data, msg);
    }
}
