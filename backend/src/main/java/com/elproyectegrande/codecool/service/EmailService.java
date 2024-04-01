package com.elproyectegrande.codecool.service;

<<<<<<< HEAD
=======
import com.elproyectegrande.codecool.model.User;
import org.springframework.beans.factory.annotation.Value;
>>>>>>> ddeb42b69da1b4a9655ffae88c54029e23021581
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
<<<<<<< HEAD

    private final JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }
    public void sendEmail(String to, String from,String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setFrom(from);
        message.setSubject(subject);
        message.setText(body);

=======
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
        message.setText(String.format("Hello %s%nPlease click on the activation link %s/#/activationlink/"
                        + newUserActivationToken
                        + " to activate your account.%n"
                        + "Link will expire in 15 minutes",
                newUser.getUsername(),
                frontendUrl));
>>>>>>> ddeb42b69da1b4a9655ffae88c54029e23021581
        mailSender.send(message);
    }
}
