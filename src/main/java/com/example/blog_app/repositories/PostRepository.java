package com.example.blog_app.repositories;

import com.example.blog_app.entities.Category;
import com.example.blog_app.entities.Post;
import com.example.blog_app.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PostRepository extends JpaRepository<Post, Integer> {

    List<Post> findByUser(User user);
    List<Post> findByCategory(Category category);

    @Query("select p from Post p where p.title like :key")
    List<Post> searchByTitle(@Param("key") String title);


}
