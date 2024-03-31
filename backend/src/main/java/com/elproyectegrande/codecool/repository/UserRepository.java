package com.elproyectegrande.codecool.repository;

import com.elproyectegrande.codecool.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);
    Optional<User> findUserByUsernameIgnoreCase(String username);
    Optional<User> findUserById(String userId);
    List<User> findByIsActiveFalseAndCreationTimeBefore(LocalDateTime creationTime);
}
