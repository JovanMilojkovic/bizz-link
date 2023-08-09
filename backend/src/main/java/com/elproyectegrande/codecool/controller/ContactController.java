package com.elproyectegrande.codecool.controller;


import com.elproyectegrande.codecool.auth.ContactRequest;
import com.elproyectegrande.codecool.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:5173/")
@RequestMapping("/add-contact")
@RequiredArgsConstructor
public class ContactController {
    private final ContactService service;

    @PostMapping
    public ResponseEntity<?> addContact(@RequestBody ContactRequest request){
        return service.addContact(request);
    }
}
