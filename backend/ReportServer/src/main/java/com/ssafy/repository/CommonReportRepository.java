package com.ssafy.repository;

import com.ssafy.entity.Report;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CommonReportRepository extends MongoRepository<Report, ObjectId> {

    public List<Report> findAll();
}
