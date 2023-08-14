package com.elproyectegrande.codecool.service;

import com.elproyectegrande.codecool.auth.ContactRequest;
import com.elproyectegrande.codecool.model.Contact;
import com.elproyectegrande.codecool.model.User;
import com.elproyectegrande.codecool.repository.ContactRepository;
import com.elproyectegrande.codecool.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ContactService {
    private final UserRepository userRepository;
    private final ContactRepository contactRepository;
    private final JwtService jwtService;

    public ResponseEntity<?> addContact(ContactRequest request){
        Contact contact = new Contact();
        contact.setFirstname(request.getFirstname());
        contact.setLastname(request.getLastname());
        contact.setLinkedin(request.getLinkedin());
        contact.setPicture(request.getPicture());
        contact.setFacebook(request.getFacebook());
        contact.setEmail(request.getEmail());

        //contactRepository.save(contact); --> We must to change logic before we save contact

        return ResponseEntity.ok("Contact saved successfully");
    }

    public ResponseEntity<?> getContacts(Map<String, String> header){
        String token = header.get("authorization").substring(7);
        String userName = jwtService.extractUsername(token);
        Optional<User> user = userRepository.findUserByUsernameIgnoreCase(userName);
        Optional<List<Contact>> contactList= contactRepository.findContactsByUser(user);
        return ResponseEntity.ok(contactList);
    }
}
