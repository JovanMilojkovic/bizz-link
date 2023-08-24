package com.elproyectegrande.codecool.controller;


import com.elproyectegrande.codecool.service.AuthorizationService;
import com.elproyectegrande.codecool.service.EditService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/dashboard")
public class AuthorizationController {

    private final AuthorizationService authorizationService;
    private final EditService editService;


    public AuthorizationController(AuthorizationService authorizationService, EditService editService) {
        this.authorizationService = authorizationService;
        this.editService = editService;
    }


    @GetMapping("/**")
    public ResponseEntity<?> userCredentialOK(@RequestHeader Map<String, String> header, @RequestParam String id) {
        String token = header.get("authorization").substring(7);
        return authorizationService.authorize(token, id);
    }
}
