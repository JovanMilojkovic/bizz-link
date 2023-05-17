package com.elproyectegrande.codecool.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class Controller {
    @GetMapping("/root")
    public String helloFromBackend(){
        return "Hello from backend";
    }

}
