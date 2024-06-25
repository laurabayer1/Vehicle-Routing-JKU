package com.example.routing.controller;

import com.example.routing.entity.Address;
import com.example.routing.entity.Coordinates;
import com.example.routing.entity.Person;
import com.example.routing.repository.AddressRepository;
import com.example.routing.repository.CoordinatesRepository;
import com.example.routing.service.PersonService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Shared API", description = "") // Swagger
@RestController                             // Spring Framework
@CrossOrigin(origins = "*")                 // Anfragen aller Domains akzeptiert
public class SharedController {

    @Autowired                              // Abhängigkeiten, Beans
    private AddressRepository addressRepository;

    @Autowired
    private CoordinatesRepository coordinatesRepository;

    @GetMapping("/address")
    public List<Address> getAllAddress() {
        return addressRepository.findAll();
    }

    @GetMapping("/coordinates")
    public List<Coordinates> getAllCoordinates() {
        return coordinatesRepository.findAll();
    }

}
