package com.elproyectegrande.codecool.service;


import com.elproyectegrande.codecool.auth.EditRequest;
import com.elproyectegrande.codecool.model.User;
import com.elproyectegrande.codecool.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EditService {
    private final UserRepository repository;

    public ResponseEntity<String> updateUser(EditRequest request, String id){
        Optional<User> optionalUser = repository.findUserByUsername(id);
        
        if (optionalUser.isEmpty()) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
        User user = optionalUser.get();

        if (request.getFirstName() != null) {
            user.setFirstName(request.getFirstName());
        }

        if (request.getLastName() != null) {
            user.setLastName(request.getLastName());
        }

        if (request.getLinkedin() != null) {
            user.setLinkedin(request.getLinkedin());
        }

        if (request.getFacebook() != null) {
            user.setFacebook(request.getFacebook());
        }

        if (request.getPicture() != null) {
            user.setPicture(request.getPicture());
        }

        /*if (request.getPassword() != null) {
            user.setPassword(passwordEncoder.encode(request.getPassword()));
        }*/

        repository.save(user);

        return new ResponseEntity<>("User information updated", HttpStatus.OK);
    }
}
