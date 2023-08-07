package com.elproyectegrande.codecool.repository;

import com.elproyectegrande.codecool.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findUserByUsernameIgnoreCase (String username);

}
