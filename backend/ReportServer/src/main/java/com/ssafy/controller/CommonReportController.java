package com.ssafy.controller;

import com.ssafy.entity.Report;
import com.ssafy.payload.ReportResponseList;
import com.ssafy.repository.CommonReportRepository;
import com.ssafy.service.CommonReportService;
import com.ssafy.util.Adapter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
        import org.springframework.web.bind.annotation.RestController;

import javax.xml.ws.Response;
import java.util.List;

@RestController
@CrossOrigin(origins = {"*"})
@RequestMapping("report")
@Slf4j
public class CommonReportController {

        private final CommonReportService commonReportService;

        public CommonReportController(CommonReportService commonReportService){
                this.commonReportService = commonReportService;
        }


        @GetMapping("common")
        public ResponseEntity<?> listReports(){
                log.info("listReports methods Start : return List<ReportResponseList>");

                List<Report> data = commonReportService.listReports();

                ReportResponseList response = Adapter.toReportResponseList(data);

                log.info("listReports methods End");
                return response.getData().size() == 0 ? ResponseEntity.status(HttpStatus.CREATED).body(response)
                        : ResponseEntity.ok(response);
        }
}
