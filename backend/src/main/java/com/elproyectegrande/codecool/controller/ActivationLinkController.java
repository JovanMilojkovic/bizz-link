package com.elproyectegrande.codecool.controller;

import com.elproyectegrande.codecool.service.ActivationLinkService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/activationlink")
public class ActivationLinkController {

    private final ActivationLinkService activationLinkService;

    public ActivationLinkController(ActivationLinkService activationLinkService) {
        this.activationLinkService = activationLinkService;
    }

    @GetMapping("/**")
    public ResponseEntity<String> activationLinkResponse(HttpServletRequest request) {
        return activationLinkService.activateProfile(request);

    }
}
