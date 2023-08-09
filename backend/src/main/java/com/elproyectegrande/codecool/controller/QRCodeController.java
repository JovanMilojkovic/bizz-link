package com.elproyectegrande.codecool.controller;

import com.elproyectegrande.codecool.auth.QRCodeResponse;
import com.elproyectegrande.codecool.service.QRCodeService;
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
    public QRCodeResponse getBusinessCardData(@RequestParam String username){
        return service.generate(username);
    }
}
