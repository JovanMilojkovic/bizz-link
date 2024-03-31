package com.elproyectegrande.codecool.service;

import com.elproyectegrande.codecool.model.User;
import com.elproyectegrande.codecool.repository.UserRepository;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class UserCleanupService {
    private final UserRepository userRepository;

    public UserCleanupService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Scheduled(fixedRate = 900000) // 15 minutes in milliseconds
    public void deleteInactiveUsers() {
        LocalDateTime fifteenMinutesAgo = LocalDateTime.now().minusMinutes(15);

        List<User> inactiveUsers = userRepository.findByIsActiveFalseAndCreationTimeBefore(fifteenMinutesAgo);

        userRepository.deleteAll(inactiveUsers);
    }
}


