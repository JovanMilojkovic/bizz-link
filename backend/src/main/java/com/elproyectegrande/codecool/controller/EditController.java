package com.elproyectegrande.codecool.controller;

import com.elproyectegrande.codecool.auth.EditRequest;
import com.elproyectegrande.codecool.auth.EditResponse;
import com.elproyectegrande.codecool.model.User;
import com.elproyectegrande.codecool.service.EditService;
import com.elproyectegrande.codecool.service.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/dashboard")
public class EditController {

    private final EditService editService;
    private final JwtService jwtService;

    public EditController(EditService editService, JwtService jwtService) {
        this.editService = editService;
        this.jwtService = jwtService;
    }

    @GetMapping("/edit-user")
    public ResponseEntity<Optional<User>>getUserData(@RequestHeader Map<String, String> header, @RequestParam String id, @RequestParam String email) throws IOException {
        String token = header.get("authorization").substring(7);
        String userName = jwtService.extractUsername(token);
        return editService.getUserData(userName,id,email);
    }

    @PutMapping("/edit-user")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<EditResponse> edit(@RequestBody EditRequest request, @RequestParam String id){
        return editService.updateUser(request, id);
    }
}


