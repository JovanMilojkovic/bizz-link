package com.elproyectegrande.codecool.controller;


import com.elproyectegrande.codecool.model.User;
import com.elproyectegrande.codecool.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/v1")
public class Controller {

    private UserService userService;

    public Controller(UserService repository) {
        this.userService = repository;
    }

    @PostMapping("/addUser")
    public String saveUser(@RequestBody User user){
        userService.save(user);
        return "User saved";
    }

    @PostMapping("/login")
    public Optional<User> getUser(@RequestBody User logInForm) throws Exception {
       return userService.getUser(logInForm);
    }
}
