package com.elproyectegrande.codecool.repository;

import com.elproyectegrande.codecool.model.Contact;
import com.elproyectegrande.codecool.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ContactRepository extends JpaRepository<Contact, String> {
    Optional<List<Contact>> findContactsByUser(Optional<User> user);
}
