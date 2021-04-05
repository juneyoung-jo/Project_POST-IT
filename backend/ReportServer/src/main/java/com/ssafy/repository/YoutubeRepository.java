package com.ssafy.repository;

import com.ssafy.entity.Youtube;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface YoutubeRepository extends MongoRepository<Youtube, ObjectId> {
    public List<Youtube> findAll();

    public List<Youtube> findByIdIn(List<String> list);
}
