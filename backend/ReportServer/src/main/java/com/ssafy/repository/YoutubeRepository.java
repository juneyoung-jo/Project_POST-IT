package com.ssafy.repository;

import com.ssafy.entity.YoutubeDto;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface YoutubeRepository extends MongoRepository<YoutubeDto, ObjectId> {
    public List<YoutubeDto> findAll();
}
