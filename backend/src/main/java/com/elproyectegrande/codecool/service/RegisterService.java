package com.elproyectegrande.codecool.service;

import com.elproyectegrande.codecool.auth.RegisterRequest;
import com.elproyectegrande.codecool.model.Role;
import com.elproyectegrande.codecool.model.User;
import com.elproyectegrande.codecool.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
@RequiredArgsConstructor
public class RegisterService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;


    public ResponseEntity<String> registerNewUser(RegisterRequest request) {
        String userExistMsg = "User already exist";
        Optional<User> tempUser = repository.findByEmail(request.getEmail());
        if (tempUser.isPresent()){
            return new ResponseEntity<>(userExistMsg, HttpStatusCode.valueOf(403));
        }
            var createNewUser = User.builder()
                    .username(request.getUsername())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .role(Role.USER)
                    .build();
            repository.save(createNewUser);
            return new ResponseEntity<>("Account created",HttpStatusCode.valueOf(200));
    }
}
