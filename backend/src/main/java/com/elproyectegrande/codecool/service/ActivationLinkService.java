package com.elproyectegrande.codecool.service;


import com.elproyectegrande.codecool.model.User;
import com.elproyectegrande.codecool.repository.UserRepository;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class ActivationLinkService {

    private final JwtService jwtService;
    private final UserRepository userRepository;

    public ActivationLinkService(JwtService jwtService, UserRepository userRepository) {
        this.jwtService = jwtService;
        this.userRepository = userRepository;
    }

    public ResponseEntity<String> activateProfile(HttpServletRequest request) {
        String urlRequest = request.getRequestURL().toString();
        int indexOfLastSlash = urlRequest.lastIndexOf("/") + 1;
        String tokenFromUrl = urlRequest.substring(indexOfLastSlash);

        try {
            jwtService.isTokenExpired(tokenFromUrl);
            Optional<User> user = userRepository.findUserById(jwtService.extractUserId(tokenFromUrl));
            return user.isPresent() ? activateUser(user.get()) : userNotPresent();

        } catch (ExpiredJwtException expiredJwtException) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Token already expired,please create profile again");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }


    private ResponseEntity<String> userNotPresent() {
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Something went wrong :-(");
    }


    private ResponseEntity<String> activateUser(User user) {
        user.setActive(true);
        userRepository.save(user);
        return ResponseEntity.status(HttpStatus.OK).body("Account has been successfully activated");

    }
}

