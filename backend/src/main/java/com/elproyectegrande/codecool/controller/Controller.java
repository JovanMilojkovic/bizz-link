package com.elproyectegrande.codecool.controller;


import com.elproyectegrande.codecool.dao.UserRepository;
import com.elproyectegrande.codecool.model.AppUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class Controller {
    @Autowired
    private UserRepository repository;
    @GetMapping("/root")
    public String helloFromBackend(){
        return "Hello from backend";
    }

    @PostMapping("/saveUser")
    public String saveUser(@RequestBody AppUser user){
        repository.save(user);
        return "User saved";
    }

    @GetMapping("/getAll")
    public List<AppUser> getAll(){
        return repository.findAll();
    }

    @GetMapping("/getUser/{firstName}")
    public List<AppUser> getUserByFirstName(@PathVariable String firstName){
        return repository.findByFirstName(firstName);
    }
}
