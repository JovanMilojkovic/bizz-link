package com.elproyectegrande.codecool.auth;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EditRequest {
    private String email;
    private String firstName;
    private String lastName;
    private String linkedin;
    private String facebook;
    private String picture;

}
