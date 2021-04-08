package com.ssafy.controller;

import com.ssafy.payload.ReportResponse;
import com.ssafy.payload.ReportResponseList;
import com.ssafy.service.CommonReportService;
import com.ssafy.util.Adapter;
import com.ssafy.util.DateFormat;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@Tag(name = "Common Report", description = "Common Report API")
@RestController
@CrossOrigin(origins = {"*"})
@RequestMapping("report")
@Slf4j
public class CommonReportController {

    private final CommonReportService commonReportService;

    public CommonReportController(CommonReportService commonReportService) {
        this.commonReportService = commonReportService;
    }


    @Operation(summary = "주간 보고서 전체 리턴", description = "주간 보고서 전체를 조회합니다.")
    @GetMapping("common")
    public ResponseEntity<?> listReports() {
        log.info("listReports methods Start : return List<ReportResponseList>");

        // List<Report> to List<ReportResponse>
        // getWeekOfMonth(Date date) -> 해당월의 주차 ex) 4월 1주차.
        List<ReportResponse> data = commonReportService.listReports().stream()
                .map(o -> Adapter.toReportResponse(o, DateFormat.getWeekOfMonth(o.getId().getDate())))
                .collect(Collectors.toList());

        ReportResponseList response = Adapter.toReportResponseList(data);

        log.info("listReports methods End");
        return CollectionUtils.isEmpty(response.getData()) ? ResponseEntity.status(HttpStatus.CREATED).body(response)
                : ResponseEntity.ok(response);
    }
}
