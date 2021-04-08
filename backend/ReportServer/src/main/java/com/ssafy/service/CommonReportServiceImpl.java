package com.ssafy.service;

import com.ssafy.entity.Report;
import com.ssafy.repository.BlogRepository;
import com.ssafy.repository.CommonReportRepository;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommonReportServiceImpl implements CommonReportService {

    private final CommonReportRepository commonReportRepository;

    public CommonReportServiceImpl(CommonReportRepository commonReportRepository) {
        this.commonReportRepository = commonReportRepository;
    }

    @Override
    public List<Report> listReports() {
        return commonReportRepository.findAll()
                .stream()
                .sorted((o1, o2) -> Long.compare(o2.getCreation_date(),o1.getCreation_date()))
                .collect(Collectors.toList());
    }

}
