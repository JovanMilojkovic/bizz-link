package com.elproyectegrande.codecool.controller;


import com.elproyectegrande.codecool.model.User;
import com.elproyectegrande.codecool.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/v1")
public class Controller {
    private final UserService userService;


    public Controller(UserService userService) {
        this.userService = userService;

    }

    @PostMapping("/signup")
    public ResponseEntity<String> saveUser(@RequestBody User user) {
        boolean userSaved = userService.saveUser(user);
        if (userSaved) {
            return ResponseEntity.ok("User successfully registered");
        }
        return new ResponseEntity<>("Email already exist", HttpStatus.FORBIDDEN);
    }

    @PostMapping("/login")
    public ResponseEntity <Optional<User>> getUser(@RequestBody User logInForm) {
        Optional<User> tempUser = userService.getUser(logInForm);
        if (tempUser.isEmpty()){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(tempUser, HttpStatus.OK);
    }

}
