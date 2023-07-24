package com.elproyectegrande.codecool.controller;


import com.elproyectegrande.codecool.service.JwtService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin("http://localhost:5173/")
@RequestMapping("/")
public class DashboardController {
    private final JwtService jwtService;


    public DashboardController(JwtService jwtService) {
        this.jwtService = jwtService;

    }

    @PostMapping("dashboard/")
    public void areUserCredentialOK(@RequestHeader Map<String,String> header) {
        String token = header.get("x-authorization").substring(7);
        System.out.println("HI");

    }
}
