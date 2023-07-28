package com.elproyectegrande.codecool.auth;


import com.elproyectegrande.codecool.model.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthorizationRequest {
    private String email;
    private Role role;

}
