package com.ssafy.repository;

import com.ssafy.entity.BlogDto;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface BlogRepository extends MongoRepository<BlogDto, ObjectId> {
    public List<BlogDto> findAll();
    public List<BlogDto> findByCategoryIn(List<Integer> list);
}
