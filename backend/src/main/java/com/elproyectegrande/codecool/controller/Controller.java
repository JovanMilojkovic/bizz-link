package com.elproyectegrande.codecool.controller;


import com.elproyectegrande.codecool.model.AppUser;
import com.elproyectegrande.codecool.service.DAO.UserDAO;
import com.elproyectegrande.codecool.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/v1")
public class Controller {

    private UserService repository;

    public Controller(UserService repository) {
        this.repository = repository;
    }

    @GetMapping("/root")
    public String helloFromBackend(){
        return "Hello from backend";
    }

    @PostMapping("/addUser")
    public String saveUser(@RequestBody AppUser user){
        repository.save(user);
        return "User saved";
    }

    @GetMapping("/getAll")
    public List<AppUser> getAll(){
        return repository.findAll();
    }
}
