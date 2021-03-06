package com.codeclan.example.booksmart.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "mesas")
public class Mesa {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "capacity")
    private int capacity;

    @JsonIgnoreProperties("mesas")
    @OneToMany(mappedBy = "mesa", fetch = FetchType.LAZY)
    private List<Booking> bookings;


    public Mesa(String name, int capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = new ArrayList<Booking>();
    }

    public Mesa(){}


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }
}
