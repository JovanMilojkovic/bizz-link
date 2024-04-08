package com.elproyectegrande.codecool.service;

import com.elproyectegrande.codecool.auth.AuthorizationResponse;
import com.elproyectegrande.codecool.model.User;
import com.elproyectegrande.codecool.repository.UserRepository;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.Optional;

@Service
public class AuthorizationService {

    private final JwtService jwtService;
    private final UserRepository userRepository;
    private final AuthorizationResponse authorizationResponse;


    public AuthorizationService(JwtService jwtService, UserRepository userRepository, AuthorizationResponse authorizationResponse) {
        this.jwtService = jwtService;
        this.userRepository = userRepository;
        this.authorizationResponse = authorizationResponse;
    }

    public ResponseEntity<?> authorize(String token, String username) {
        String usernameFromToken = jwtService.extractUsername(token);
        Charset charset = StandardCharsets.UTF_16;
        if (username.equalsIgnoreCase(usernameFromToken)) {
            Optional<User> currentUser = userRepository.findByUsername(usernameFromToken);
            if (currentUser.isEmpty()) {
                return new ResponseEntity<>(HttpStatusCode.valueOf(404));
            } else {
                User user = currentUser.get();
                authorizationResponse.setUsername(user.getUsername());
                authorizationResponse.setEmail(user.getEmail());
                authorizationResponse.setPhone(user.getPhone());
                authorizationResponse.setPicture(new String(user.getPicture(), charset));
                return new ResponseEntity<>(authorizationResponse, HttpStatusCode.valueOf(200));
            }
        }
        return new ResponseEntity<>(HttpStatusCode.valueOf(401));
    }

}
