package com.elproyectegrande.codecool.controller;


import com.elproyectegrande.codecool.auth.AuthenticationRequest;
import com.elproyectegrande.codecool.auth.AuthenticationResponse;
import com.elproyectegrande.codecool.service.AuthenticationService;
import jakarta.mail.AuthenticationFailedException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {


    private final AuthenticationService service;


    @PostMapping("/login")
    public AuthenticationResponse authenticate(
            @RequestBody AuthenticationRequest request
    ) throws AuthenticationFailedException {
        return service.authenticate(request);
    }
}