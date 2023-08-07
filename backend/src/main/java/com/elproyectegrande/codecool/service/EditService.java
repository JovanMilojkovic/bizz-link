package com.elproyectegrande.codecool.service;


import com.elproyectegrande.codecool.auth.EditRequest;
import com.elproyectegrande.codecool.auth.EditResponse;
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
    private final JwtService jwtService;

    public ResponseEntity<EditResponse> updateUser(EditRequest request, String id){
        Optional<User> optionalUser = repository.findUserByUsername(id);
        
        if (optionalUser.isEmpty()) {
            return new ResponseEntity<>( HttpStatus.NOT_FOUND);
        }
        User user = optionalUser.get();

        if (request.getUsername() != null) {
            user.setUsername(request.getUsername());
        }

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
        String token = jwtService.generateToken(user);

        EditResponse editResponse = new EditResponse();
        editResponse.setUsername(user.getUsername());
        editResponse.setEmail(user.getEmail());
        editResponse.setToken(token);

        return new ResponseEntity<>(editResponse, HttpStatus.OK);
    }
}
