package com.ssafy.repository;

import com.ssafy.entity.Blog;
import org.bson.types.ObjectId;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface BlogRepository extends MongoRepository<Blog, ObjectId> {

    public List<Blog> findAll();

    public List<Blog> findByIdIn(List<String> list);
}
