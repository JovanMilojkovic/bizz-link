package com.elproyectegrande.codecool.service;

import com.elproyectegrande.codecool.auth.EditRequest;
import com.elproyectegrande.codecool.auth.EditResponse;
import com.elproyectegrande.codecool.model.User;
import com.elproyectegrande.codecool.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.Optional;

@Service
public class EditService {
    private final UserRepository repository;
    private final JwtService jwtService;


    public EditService(UserRepository repository, JwtService jwtService) {
        this.repository = repository;
        this.jwtService = jwtService;
    }

    public ResponseEntity<User> getUserData(String usernameFromToken, String username, String email) throws IOException {
        if (!usernameFromToken.equalsIgnoreCase(username)) {
            throw new IOException("User not found");
        }
        Optional<User> optionalUser = repository.findByEmail(email);
        if (optionalUser.isEmpty()) {
            throw new IOException("User not found");
        } else {
            return new ResponseEntity<>(optionalUser.get(), HttpStatus.OK);
        }

    }

    public ResponseEntity<EditResponse> updateUser(EditRequest request, String email) {
        Optional<User> optionalUser = repository.findByEmail(email);
        Charset charset = StandardCharsets.UTF_16;
        if (optionalUser.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
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
        if(request.getPhone() != null){
            user.setPhone(request.getPhone());
        }

        if (request.getLinkedin() != null) {
            user.setLinkedin(request.getLinkedin());
        }

        if (request.getFacebook() != null) {
            user.setFacebook(request.getFacebook());
        }

        if (request.getPicture() != null) {
            user.setPicture(request.getPicture().getBytes(charset));
        }

        repository.save(user);
        String token = jwtService.generateToken(user);


        EditResponse editResponse = new EditResponse();
        editResponse.setUsername(user.getUsername());
        editResponse.setEmail(user.getEmail());
        if (user.getPicture() != null) {
            editResponse.setPicture(new String(user.getPicture(), charset));
        } else editResponse.setPicture(null);
        editResponse.setToken(token);

        return new ResponseEntity<>(editResponse, HttpStatus.OK);
    }
}
