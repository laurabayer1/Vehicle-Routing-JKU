package com.example.routing.entity;

import jakarta.persistence.*;

@Entity
public class TransportProvider {

    @Id
    @GeneratedValue
    private Integer id;

    private String companyName;

    private String review;

    @OneToOne(cascade = CascadeType.ALL)        // 1:1-Beziehung mit Adresse
    private Address companyAddress;

    @OneToOne(cascade = CascadeType.ALL)
    private Coordinates companyCoordinates;

    public TransportProvider() {    //leerer Kosntruktor für JPA erforderlich (instanzieren)
    }

    public TransportProvider(String companyName, String review, Address companyAddress, Coordinates companyCoordinates) {
        // ohne id um Objekt zu erstellen
        this.companyName = companyName;
        this.review = review;
        this.companyAddress = companyAddress;
        this.companyCoordinates = companyCoordinates;
    }

    public TransportProvider(Integer id, String companyName, String review, Address companyAddress, Coordinates companyCoordinates) {
        // mit id um Objekt zu lesen
        this.id = id;
        this.companyName = companyName;
        this.review = review;
        this.companyAddress = companyAddress;
        this.companyCoordinates = companyCoordinates;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public Address getCompanyAddress() {
        return companyAddress;
    }

    public void setCompanyAddress(Address companyAddress) {
        this.companyAddress = companyAddress;
    }

    public Coordinates getCompanyCoordinates() {
        return companyCoordinates;
    }

    public void setCompanyCoordinates(Coordinates companyCoordinates) {
        this.companyCoordinates = companyCoordinates;
    }

    @Override
    public String toString() {
        return "TransportProvider{" +
                "id=" + id +
                ", companyName='" + companyName + '\'' +
                ", review='" + review + '\'' +
                ", companyAddress=" + companyAddress +
                ", companyCoordinates=" + companyCoordinates +
                '}';
    }
}
