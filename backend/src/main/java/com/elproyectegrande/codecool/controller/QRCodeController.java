package com.elproyectegrande.codecool.controller;

import com.elproyectegrande.codecool.auth.QRCodeResponse;
import com.elproyectegrande.codecool.service.QRCodeService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:5173")
@RequestMapping("/business-card")
public class QRCodeController {
    private final QRCodeService service;

    public QRCodeController(QRCodeService service) {
        this.service = service;
    }

    @GetMapping("")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<QRCodeResponse> getBusinessCardData(@RequestParam String username){
        return service.generate(username);
    }
}
