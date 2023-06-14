package com.elproyectegrande.codecool.service.DAO;

import com.elproyectegrande.codecool.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserDAO extends JpaRepository<User, Integer> {
    User findUserByEmail(String email);

}
