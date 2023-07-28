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

    public AuthorizationResponse(String username, String email) {
        this.username = username;
        this.email = email;
    }
}
