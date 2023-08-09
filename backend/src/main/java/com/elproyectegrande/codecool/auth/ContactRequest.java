package com.elproyectegrande.codecool.auth;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ContactRequest {
    private String firstname;
    private String lastname;
    private String email;
    private String linkedin;
    private String facebook;
    private String picture;
}
