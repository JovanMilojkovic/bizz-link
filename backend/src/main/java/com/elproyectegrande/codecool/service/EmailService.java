package com.elproyectegrande.codecool.service;

import com.elproyectegrande.codecool.model.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;
    private final JwtService jwtService;

    public EmailService(JwtService jwtService, JavaMailSender mailSender) {
        this.jwtService = jwtService;
        this.mailSender = mailSender;
    }

    @Value("${spring.mail.username}")
    private String serverEmail;

    @Value("${frontend.url}")
    private String frontendUrl;


    public void sendEmail(User newUser) {
        String newUserActivationToken = jwtService.generateActivationLinkToken(newUser);
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(newUser.getEmail());
        message.setFrom(serverEmail);
        message.setSubject("Activation link");
        message.setText(String.format("Hello %s%nPlease click on the activation link %s#/activationlink/%s to activate your account.%nLink will expire in 15 minutes",
                newUser.getUsername(),
                frontendUrl,
                newUserActivationToken));
        mailSender.send(message);
    }
}
