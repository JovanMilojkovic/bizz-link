package com.elproyectegrande.codecool.service;

import org.springframework.stereotype.Service;

import java.util.Base64;

@Service
public class PictureService {
    public byte[] decodePicture(String base64Picture) {
        return Base64.getDecoder().decode(base64Picture);
    }

    public String encodePicture(byte[] pictureData) {
        return Base64.getEncoder().encodeToString(pictureData);
    }

    public void storePicture(String base64Picture) {
        byte[] pictureData = decodePicture(base64Picture);
        // Store pictureData in the database
    }

    public String retrievePicture() {
        // Retrieve pictureData from the database
        byte[] pictureData = null;
        return encodePicture(pictureData);
    }
}