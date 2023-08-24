package com.elproyectegrande.codecool.controller;

import com.elproyectegrande.codecool.auth.QRCodeResponse;
import com.elproyectegrande.codecool.service.QRCodeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.util.Base64Utils;
import org.springframework.web.bind.annotation.*;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;

@RestController
@RequestMapping("/business-card")
public class QRCodeController {
    private final QRCodeService service;
    private String secretKey = "yourSecretKey";

    public QRCodeController(QRCodeService service) {
        this.service = service;
    }

    @GetMapping("")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<QRCodeResponse> getBusinessCardData(@RequestParam String username){
        return service.generate(username);
    }


    public String decryptData(String encryptedData) {
        try {
            // Convert the encrypted data from base64
            byte[] encryptedBytes = Base64Utils.decodeFromString(encryptedData);

            // Initialize the AES cipher in decryption mode
            Cipher cipher = Cipher.getInstance("AES");
            SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "AES");
            cipher.init(Cipher.DECRYPT_MODE, secretKeySpec);

            // Decrypt the data
            byte[] decryptedBytes = cipher.doFinal(encryptedBytes);
            String decryptedData = new String(decryptedBytes, StandardCharsets.UTF_8);

            return decryptedData;
        } catch (Exception e) {
            return "Error";
        }
    }
}
