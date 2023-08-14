package com.elproyectegrande.codecool.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "contact")
public class Contact {
    @Id
    @GeneratedValue
    private Integer id;
    private String firstname;
    private String lastname;
    private String email;
    private String picture;
    private String linkedin;
    private String facebook;

    @ManyToOne
    @JoinColumn(name = "user_id") // This is the foreign key column in the Contacts table
    private User user;
}
