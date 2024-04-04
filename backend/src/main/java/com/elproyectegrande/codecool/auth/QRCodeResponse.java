package com.elproyectegrande.codecool.auth;


import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class QRCodeResponse {
    private String firstname;
    private String lastname;
    private String email;
    private String picture;
    private String phone;
    private String linkedin;
    private String facebook;
    private String token;

}
