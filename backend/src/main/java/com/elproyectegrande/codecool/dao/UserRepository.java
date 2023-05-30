package com.elproyectegrande.codecool.dao;

import com.elproyectegrande.codecool.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<AppUser, Integer> {

    List<AppUser> findByFirstName(String firstName);
}
