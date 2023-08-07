package com.elproyectegrande.codecool.auth;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.File;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EditRequest {
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private String linkedin;
    private String facebook;
    private String picture;

}
