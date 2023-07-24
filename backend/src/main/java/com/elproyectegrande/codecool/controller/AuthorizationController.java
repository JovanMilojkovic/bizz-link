package com.elproyectegrande.codecool.controller;


import com.elproyectegrande.codecool.service.AuthorizationService;
import com.elproyectegrande.codecool.service.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin("http://localhost:5173/")
@RequestMapping("/")
public class AuthorizationController {
    private final JwtService jwtService;
    private final AuthorizationService authorizationService;


    public AuthorizationController(JwtService jwtService, AuthorizationService authorizationService) {
        this.jwtService = jwtService;
        this.authorizationService = authorizationService;
    }

    @PostMapping("dashboard/")
    public ResponseEntity<?> userCredentialOK(@RequestHeader Map<String,String> header) {
        String token = header.get("x-authorization").substring(7);
        System.out.println("HI");
        return authorizationService.authorize(token);
    }
}
