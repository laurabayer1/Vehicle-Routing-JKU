package com.example.routing.repository;

import com.example.routing.entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PersonRepository extends JpaRepository<Person, Integer> {

}
