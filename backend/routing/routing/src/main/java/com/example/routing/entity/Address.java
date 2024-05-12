package com.example.routing.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Address {

    @Id
    @GeneratedValue
    private int id;
    private String streetName;
    private String doorNumber;
    private String zipcode;
    private String city;

    public Address() {
    }

    @Id
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStreetName() {
        return streetName;
    }

    public void setStreetName(String streetName) {
        this.streetName = streetName;
    }

    public String getDoorNumber() {
        return doorNumber;
    }

    public void setDoorNumber(String doorNumber) {
        this.doorNumber = doorNumber;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Override
    public String toString() {
        return "Address{" +
                "id=" + id +
                ", streetName='" + streetName + '\'' +
                ", doorNumber='" + doorNumber + '\'' +
                ", zipcode='" + zipcode + '\'' +
                ", city='" + city + '\'' +
                '}';
    }
}
