package com.example.routing.service;

import com.example.routing.entity.Person;
import com.example.routing.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService {

    @Autowired
    private PersonRepository repository;

    public Person savePerson(Person person) {
        return repository.save(person);
    }

    public List<Person> getPeople() {
        return repository.findAll();
    }

    public Person getPersonById(int id) {
        return repository.findById(id).orElse(null);
    }

    public void deletePerson(int id) {
        Person p = getPersonById(id);

        if (p != null) {
            repository.deleteById(p.getId());
        }
    }

    public Person updatePerson(int id, Person person) {
        return repository
                .findById(id)
                .map(value -> {
                    value.setGender(person.getGender());
                    value.setTitel(person.getTitel());
                    value.setFirstName(person.getFirstName());
                    value.setLastName(person.getLastName());
                    value.setBirthday(person.getBirthday());
                    value.setStartAddress(person.getStartAddress());
                    value.setTargetAddress(person.getTargetAddress());
                    value.setStartCoordinates(person.getStartCoordinates());
                    value.setTargetCoordinates(person.getTargetCoordinates());
                    value.setWheelchair(person.isWheelchair());

                    return repository.save(value);
                })
                .orElseGet(() -> {
                    return repository.save(person);
                });
    }

}
