package com.elproyectegrande.codecool.service;

import com.elproyectegrande.codecool.auth.RegisterRequest;
import com.elproyectegrande.codecool.model.Role;
import com.elproyectegrande.codecool.model.User;
import com.elproyectegrande.codecool.repository.UserRepository;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;


@Service
public class RegisterService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final EmailService emailService;
<<<<<<< HEAD
=======

    public RegisterService(UserRepository repository, PasswordEncoder passwordEncoder, EmailService emailService) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
        this.emailService = emailService;
    }


    public ResponseEntity<String> checkUsernameExist(String username) {
        String usernameTaken = "Username already taken,please try another one";
        String usernameFree = "Username free";
        Optional<User> tempUserByUsername = repository.findUserByUsernameIgnoreCase(username);
        if (tempUserByUsername.isPresent()) {
            return new ResponseEntity<>(usernameTaken, HttpStatusCode.valueOf(400));
        }
        return new ResponseEntity<>(usernameFree, HttpStatusCode.valueOf(200));
    }
>>>>>>> ddeb42b69da1b4a9655ffae88c54029e23021581

    public RegisterService(UserRepository repository, PasswordEncoder passwordEncoder, EmailService emailService) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
        this.emailService = emailService;
    }

    public ResponseEntity<String> registerNewUser(RegisterRequest request) {
        String userExistMsg = "User already exist";
        Optional<User> tempUserByEmail = repository.findByEmail(request.getEmail());
        if (tempUserByEmail.isPresent()) {
            return new ResponseEntity<>(userExistMsg, HttpStatusCode.valueOf(400));
        }
        var createNewUser = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .firstName(null)
                .lastName(null)
                .facebook(null)
                .linkedin(null)
                .picture(null)
                .isActive(false)
                .creationTime(LocalDateTime.now())
                .role(Role.USER)
                .build();
<<<<<<< HEAD
        repository.save(createNewUser);
        emailService.sendEmail(request.getEmail(),"bizlinkbyjj@gmail.com","Hello", "Hello from me");
        return new ResponseEntity<>("Account created",HttpStatusCode.valueOf(200));
=======
        User createdUser = repository.save(createNewUser);
        emailService.sendEmail(createdUser);

        return new ResponseEntity<>("Account created", HttpStatusCode.valueOf(200));
>>>>>>> ddeb42b69da1b4a9655ffae88c54029e23021581
    }
}

