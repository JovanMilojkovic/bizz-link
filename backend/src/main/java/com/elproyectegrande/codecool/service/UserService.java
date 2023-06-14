package com.elproyectegrande.codecool.service;

import com.elproyectegrande.codecool.model.User;
import com.elproyectegrande.codecool.service.DAO.UserDAO;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;


@Service
public class UserService{

    private UserDAO userDAO;

    public UserService(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public void save(User user) {
        userDAO.save(user);
    }

    public Optional<User> getUser(User logInForm) {
        Optional<User> user = Optional.ofNullable(userDAO
                .findAll()
                .stream()
                .filter(u -> u.getEmail().equals(logInForm.getEmail()))
                .findFirst().orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"User not found")));

       return user;
    }

}
