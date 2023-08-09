package com.elproyectegrande.codecool.repository;

import com.elproyectegrande.codecool.model.Contact;
import com.elproyectegrande.codecool.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ContactRepository extends JpaRepository<Contact, Long> {
    Optional<User> findByEmail(String email);
}
