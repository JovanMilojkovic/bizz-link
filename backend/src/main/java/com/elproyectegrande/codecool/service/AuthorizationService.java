package com.elproyectegrande.codecool.service;

import com.elproyectegrande.codecool.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthorizationService {
    private final UserRepository repository;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public ResponseEntity<?> authorize(String token) {
        String username = jwtService.extractUsername(token);
        var user = repository.findUserByUsername(username)
                .orElseThrow();
        if(user!=null){
            return new ResponseEntity<>( HttpStatusCode.valueOf(200));
        } else {
            return new ResponseEntity<>(HttpStatusCode.valueOf(400));
        }
//        return AuthenticationResponse.builder()
//                .email(request.getEmail())
//                .username(user.getUsername())
//                .role(user.getRole())// Add the username to the response
//                .token(jwtToken)
//                .build();

    }

}
