package com.elproyectegrande.codecool.controller;


import com.elproyectegrande.codecool.service.AuthorizationService;
import com.elproyectegrande.codecool.service.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin("http://localhost:5173")
@RequestMapping("/dashboard")
public class AuthorizationController {
    private final JwtService jwtService;
    private final AuthorizationService authorizationService;


    public AuthorizationController(JwtService jwtService, AuthorizationService authorizationService) {
        this.jwtService = jwtService;
        this.authorizationService = authorizationService;
    }


    @GetMapping("/**")
    public ResponseEntity<?> userCredentialOK(@RequestHeader Map<String, String> header, @RequestParam String id) {
        String token = header.get("authorization").substring(7);
        return authorizationService.authorize(token, id);
    }
}
