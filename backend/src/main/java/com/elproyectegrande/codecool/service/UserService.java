package com.elproyectegrande.codecool.service;

import com.elproyectegrande.codecool.model.User;
import com.elproyectegrande.codecool.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class UserService{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public boolean saveUser(User user) {
        Optional<User> tempUser = userRepository.findUserByEmail(user.getEmail());
        if (tempUser.isPresent()){
            return false;
        }
        User userToBeSaved = new User(user.getId(), user.getName(), user.getEmail(), passwordEncoder.encode(user.getPassword()));
        userRepository.save(userToBeSaved);
        return true;
    }

    public Optional<User> getUser(User logInForm) {
       Optional<User> tempUser = userRepository.findUserByEmail(logInForm.getEmail());
       boolean passwordMatch = passwordEncoder.matches(logInForm.getPassword(), tempUser.get().getPassword());
        if (!passwordMatch) {
                return Optional.empty();
        }
        return tempUser;
    }

}
