package com.example.routing.entity;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
public class Person {

    @Id
    @GeneratedValue
    private Integer id;

    private String gender;

    private String titel;

    private String firstName;
    private String lastName;

    @Temporal(TemporalType.DATE)
    private Date birthday;

    @OneToOne(cascade = CascadeType.ALL)
    private Address startAddress;

    @OneToOne(cascade = CascadeType.ALL)
    private Address targetAddress;

    @OneToOne(cascade = CascadeType.ALL)
    private Coordinates startCoordinates;

    @OneToOne(cascade = CascadeType.ALL)
    private Coordinates targetCoordinates;

    private boolean wheelchair;


    public Person() {
    }

    public Person(String gender, String titel, String firstName, String lastName, Date birthday, Address startAddress, Address targetAddress, Coordinates startCoordinates, Coordinates targetCoordinates, boolean wheelchair) {
        this.gender = gender;
        this.titel = titel;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.startAddress = startAddress;
        this.targetAddress = targetAddress;
        this.startCoordinates = startCoordinates;
        this.targetCoordinates = targetCoordinates;
        this.wheelchair = wheelchair;
    }

    public Person(Integer id, String gender, String titel, String firstName, String lastName, Date birthday, Address startAddress, Address targetAddress, Coordinates startCoordinates, Coordinates targetCoordinates, boolean wheelchair) {
        this.id = id;
        this.gender = gender;
        this.titel = titel;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.startAddress = startAddress;
        this.targetAddress = targetAddress;
        this.startCoordinates = startCoordinates;
        this.targetCoordinates = targetCoordinates;
        this.wheelchair = wheelchair;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getTitel() {
        return titel;
    }

    public void setTitel(String titel) {
        this.titel = titel;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public Address getStartAddress() {
        return startAddress;
    }

    public void setStartAddress(Address startAddress) {
        this.startAddress = startAddress;
    }

    public Address getTargetAddress() {
        return targetAddress;
    }

    public void setTargetAddress(Address targetAddress) {
        this.targetAddress = targetAddress;
    }

    public Coordinates getStartCoordinates() {
        return startCoordinates;
    }

    public void setStartCoordinates(Coordinates startCoordinates) {
        this.startCoordinates = startCoordinates;
    }

    public Coordinates getTargetCoordinates() {
        return targetCoordinates;
    }

    public void setTargetCoordinates(Coordinates targetCoordinates) {
        this.targetCoordinates = targetCoordinates;
    }

    public boolean isWheelchair() {
        return wheelchair;
    }

    public void setWheelchair(boolean wheelchair) {
        this.wheelchair = wheelchair;
    }

    @Override
    public String toString() {
        return "Person{" +
                "id=" + id +
                ", gender='" + gender + '\'' +
                ", titel='" + titel + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", birthday=" + birthday +
                ", startAddress=" + startAddress +
                ", targetAddress=" + targetAddress +
                ", startCoordinates=" + startCoordinates +
                ", targetCoordinates=" + targetCoordinates +
                ", wheelchair=" + wheelchair +
                '}';
    }
}
