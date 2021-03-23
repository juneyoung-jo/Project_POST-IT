package com.ssafy.repository;

import com.mongodb.MongoException;
import com.ssafy.dto.BlogDto;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface BlogRepository extends MongoRepository<BlogDto, ObjectId> {
    public List<BlogDto> findAll();
}
