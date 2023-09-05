package com.elproyectegrande.codecool.controller;

import com.elproyectegrande.codecool.auth.QRCodeResponse;
import com.elproyectegrande.codecool.service.QRCodeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/business-card")
public class QRCodeController {
    private final QRCodeService service;

    public QRCodeController(QRCodeService service) {
        this.service = service;
    }

    @GetMapping("/**")
    public ResponseEntity<QRCodeResponse> getBusinessCardData(@RequestParam String userId) {
        return service.generate(userId);
    }

}
