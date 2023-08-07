package com.elproyectegrande.codecool.auth;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class EditResponse {
    private String username;
    private String email;
    private String token;
}
