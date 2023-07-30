package com.elproyectegrande.codecool.service;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service

public class AuthorizationService {

    private final JwtService jwtService;

    public AuthorizationService(JwtService jwtService) {
        this.jwtService = jwtService;

    }

    public ResponseEntity<?> authorize(String token, String id) {
        String username = jwtService.extractUsername(token);
        if (id.equals(username.toLowerCase())) {
            return new ResponseEntity<>(HttpStatusCode.valueOf(200));
        } else {
            return new ResponseEntity<>(HttpStatusCode.valueOf(401));
        }

    }

}

