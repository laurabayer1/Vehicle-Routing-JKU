package com.example.routing.controller;

import com.example.routing.entity.Person;
import com.example.routing.service.PersonService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Person API", description = "") // Swagger
@RestController                             // Spring Framework
@CrossOrigin(origins = "*")                 // Anfragen aller Domains akzeptiert
public class PersonController {

    @Autowired                              // Abhängigkeiten, Beans
    private PersonService service;

    @GetMapping("/person")
    @Operation(summary = "", description = "")
    public List<Person> getAllPerson() {
        return service.getPeople();
    } //Liste von Person-Objekten

    @GetMapping("/person/{id}")
    @Operation(summary = "", description = "")
    public Person getPersonById(
            @Parameter(description = "", example = "123")
            @PathVariable int id
    ) {
        return service.getPersonById(id);
    }

    @PutMapping("/person/{id}")
    public Person updatePerson(
            @RequestBody Person person,
            @PathVariable int id
    ) {
        return service.updatePerson(id, person);
    }

    @PostMapping("/person")
    public Person addPerson(@RequestBody Person person) {
        return service.savePerson(person);
    }

    @DeleteMapping("/person/{id}")
    public void deletePerson(
            @PathVariable int id
    ) {
        service.deletePerson(id);
    }

}
