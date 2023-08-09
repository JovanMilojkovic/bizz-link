package com.elproyectegrande.codecool.service;

import com.elproyectegrande.codecool.auth.ContactRequest;
import com.elproyectegrande.codecool.model.Contact;
import com.elproyectegrande.codecool.repository.ContactRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactService {
    private final ContactRepository repository;

    public ResponseEntity<?> addContact(ContactRequest request){
        Contact contact = new Contact();
        contact.setFirstname(request.getFirstname());
        contact.setLastname(request.getLastname());
        contact.setLinkedin(request.getLinkedin());
        contact.setPicture(request.getPicture());
        contact.setFacebook(request.getFacebook());
        contact.setEmail(request.getEmail());

        repository.save(contact);

        return ResponseEntity.ok("Contact saved successfully");
    }
}
