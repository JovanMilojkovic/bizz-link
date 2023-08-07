package com.elproyectegrande.codecool.auth;

import com.elproyectegrande.codecool.model.Role;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    private String token;
    private String email;
    private String username;
    private String picture;
    private Role role;
}
