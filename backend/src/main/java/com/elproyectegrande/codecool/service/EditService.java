package com.elproyectegrande.codecool.service;

import com.elproyectegrande.codecool.auth.EditRequest;
import com.elproyectegrande.codecool.auth.EditResponse;
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


    public EditService(UserRepository repository, JwtService jwtService) {
        this.repository = repository;
        this.jwtService = jwtService;
    }

    public ResponseEntity<Optional<User>> getUserData(String usernameFromToken, String username, String email) throws IOException {
        if (!usernameFromToken.equalsIgnoreCase(username)) {
            throw new IOException("User not found");
        }
        Optional<User> optionalUser = repository.findByEmail(email);
        return new ResponseEntity<>(optionalUser, HttpStatus.OK);
    }

    public ResponseEntity<EditResponse> updateUser(EditRequest request, String userId) {
        Optional<User> optionalUser = repository.findUserById(userId);

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

        if (request.getLinkedin() != null) {
            user.setLinkedin(request.getLinkedin());
        }

        if (request.getFacebook() != null) {
            user.setFacebook(request.getFacebook());
        }

        //byte[] fileContent = FileUtils.readFileToByteArray(request.getPicture());
        //String encodedString = Base64.getEncoder().encodeToString(fileContent);

        if (request.getPicture() != null) {
            user.setPicture(request.getPicture());
        }

        repository.save(user);
        String token = jwtService.generateToken(user);

        EditResponse editResponse = new EditResponse();
        editResponse.setUsername(user.getUsername());
        editResponse.setEmail(user.getEmail());
        editResponse.setPicture(user.getPicture());
        editResponse.setToken(token);

        return new ResponseEntity<>(editResponse, HttpStatus.OK);
    }
}
