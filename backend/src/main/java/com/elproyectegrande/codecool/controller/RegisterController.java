package com.elproyectegrande.codecool.controller;

import com.elproyectegrande.codecool.auth.RegisterRequest;
import com.elproyectegrande.codecool.service.RegisterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class RegisterController {

    private final RegisterService service;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody RegisterRequest request) {
        return service.registerNewUser(request);
    }
}
