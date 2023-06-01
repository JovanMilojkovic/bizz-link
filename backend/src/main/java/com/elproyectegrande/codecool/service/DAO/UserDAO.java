package com.elproyectegrande.codecool.service.DAO;

import com.elproyectegrande.codecool.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface UserDAO extends JpaRepository<AppUser, Integer> {
}
