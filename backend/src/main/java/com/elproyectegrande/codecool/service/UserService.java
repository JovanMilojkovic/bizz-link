package com.elproyectegrande.codecool.service;

import com.elproyectegrande.codecool.model.AppUser;
import com.elproyectegrande.codecool.service.DAO.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserService {

    @Autowired
    private UserDAO userDAO;

    public UserService(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public void save(AppUser user) {
        userDAO.save(user);
    }

    public List<AppUser> findAll() {
        return userDAO.findAll();
    }
}
