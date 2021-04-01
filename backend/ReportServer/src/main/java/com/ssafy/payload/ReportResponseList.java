package com.ssafy.payload;

import com.ssafy.entity.Report;
import lombok.Builder;
import lombok.NonNull;

import java.util.List;

public class ReportResponseList extends ApiResponse<List<Report>> {

    @Builder
    public ReportResponseList(final List<Report> data, final String msg) {
        super(data, msg);
    }
}
