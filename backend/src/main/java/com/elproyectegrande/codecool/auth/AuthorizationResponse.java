package com.elproyectegrande.codecool.auth;


import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
public class AuthorizationResponse {
    private String username;
    private String email;
    private String phone;
    private String picture;


    public AuthorizationResponse(String username, String email, String phone, String picture) {
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.picture = picture;
    }
}
