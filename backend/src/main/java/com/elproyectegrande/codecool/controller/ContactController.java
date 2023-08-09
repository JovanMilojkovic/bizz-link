package com.elproyectegrande.codecool.controller;


import com.elproyectegrande.codecool.auth.ContactRequest;
import com.elproyectegrande.codecool.model.Contact;
import com.elproyectegrande.codecool.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173/")
@RequestMapping("/contacts")
@RequiredArgsConstructor
public class ContactController {
    private final ContactService service;

    @GetMapping
    public List<Contact> getContacts(){
        return service.getContacts();
    }

    @PostMapping("/add-contact")
    public ResponseEntity<?> addContact(@RequestBody ContactRequest request){
        return service.addContact(request);
    }
}
