package com.example.routing.repository;

import com.example.routing.entity.Coordinates;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CoordinatesRepository extends JpaRepository<Coordinates, Integer> {

}
