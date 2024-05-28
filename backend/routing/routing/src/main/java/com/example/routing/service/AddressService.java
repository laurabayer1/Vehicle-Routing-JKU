package com.example.routing.service;

import com.example.routing.entity.Address;
import com.example.routing.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    public Address saveAddress(Address address) {
        return addressRepository.save(address);
    }

    public List<Address> getAddress() {
        return addressRepository.findAll();
    }

    public Address getAddressById(int id) {
        return addressRepository.findById(id).orElse(null);
    }

    public void deleteAddress(int id) {
        Address a = getAddressById(id);

        if (a != null) {
            addressRepository.deleteById(a.getId());
        }
    }

    public Address updateAddress(int id, Address address) {
        return addressRepository
                .findById(id)
                .map(value -> {
                    value.setStreetName(address.getStreetName());
                    value.setDoorNumber(address.getDoorNumber());
                    value.setZipcode(address.getZipcode());
                    value.setCity(address.getCity());

                    return addressRepository.save(value);
                })
                .orElseGet(() -> {
                    return addressRepository.save(address);
                });
    }
}
