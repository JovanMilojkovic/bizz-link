package com.elproyectegrande.codecool.service;

import com.elproyectegrande.codecool.auth.EditRequest;
import com.elproyectegrande.codecool.auth.EditResponse;
import com.elproyectegrande.codecool.auth.UserResponse;
import com.elproyectegrande.codecool.model.User;
import com.elproyectegrande.codecool.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Optional;

@Service
public class EditService {
    private final UserRepository repository;
    private final JwtService jwtService;
    private final PictureService pictureService;


    public EditService(UserRepository repository, JwtService jwtService, PictureService pictureService) {
        this.repository = repository;
        this.jwtService = jwtService;
        this.pictureService = pictureService;
    }

    public ResponseEntity<UserResponse> getUserData(String usernameFromToken, String username, String email) throws IOException {
        if (!usernameFromToken.equalsIgnoreCase(username)) {
            throw new IOException("User not found");
        }
        Optional<User> optionalUser = repository.findByEmail(email);
        if (optionalUser.isEmpty()) {
            throw new IOException("User not found");
        } else {
            return new ResponseEntity<>(UserResponse.builder()
                    .email(optionalUser.get().getEmail())
                    .username(optionalUser.get().getUsername())
                    .firstName(optionalUser.get().getFirstName())
                    .lastName(optionalUser.get().getLastName())
                    .linkedin(optionalUser.get().getLinkedin())
                    .facebook(optionalUser.get().getFacebook())
                    .phone(optionalUser.get().getPhone())
                    .picture(pictureService.encodePicture(optionalUser.get().getPicture()))
                    .build(), HttpStatus.OK);
        }

    }

    public ResponseEntity<EditResponse> updateUser(EditRequest request, String email) {
        Optional<User> optionalUser = repository.findByEmail(email);
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
        if (request.getPhone() != null) {
            user.setPhone(request.getPhone());
        }

        if (request.getLinkedin() != null) {
            user.setLinkedin(request.getLinkedin());
        }

        if (request.getFacebook() != null) {
            user.setFacebook(request.getFacebook());
        }

        if (request.getPicture() != null) {
            user.setPicture(pictureService.decodePicture(request.getPicture()));
        }

        repository.save(user);
        String token = jwtService.generateToken(user);


        EditResponse editResponse = new EditResponse();
        editResponse.setUsername(user.getUsername());
        editResponse.setEmail(user.getEmail());
        if (user.getPicture() != null) {
            editResponse.setPicture(pictureService.encodePicture(user.getPicture()));
        } else editResponse.setPicture(null);
        editResponse.setToken(token);

        return new ResponseEntity<>(editResponse, HttpStatus.OK);
    }
}
