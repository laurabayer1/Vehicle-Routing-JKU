package com.example.routing.controller;

import com.example.routing.entity.Address;
import com.example.routing.entity.Person;
import com.example.routing.service.AddressService;
import com.example.routing.service.PersonService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Address API", description = "")
@RestController
@CrossOrigin(origins = "*")
public class AddressController {

    @Autowired
    private AddressService service;

    @GetMapping("/address")
    @Operation(summary = "", description = "")
    public List<Address> getAllAddress() {
        return service.getAddress();
    }

    @GetMapping("/address/{id}")
    @Operation(summary = "", description = "")
    public Address getAddressById(
            @Parameter(description = "", example = "123")
            @PathVariable int id
    ) {
        return service.getAddressById(id);
    }

    @PutMapping("/address/{id}")
    public Address updateAddress(
            @RequestBody Address address,
            @PathVariable int id
    ) {
        return service.updateAddress(id, address);
    }

    @PostMapping("/address")
    public Address addAddress(@RequestBody Address address) {
        return service.saveAddress(address);
    }

    @DeleteMapping("/address/{id}")
    public void deleteAddress(
            @PathVariable int id
    ) {
        service.deleteAddress(id);
    }

}
