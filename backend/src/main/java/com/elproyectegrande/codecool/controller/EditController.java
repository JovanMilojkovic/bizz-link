package com.elproyectegrande.codecool.controller;

import com.elproyectegrande.codecool.auth.EditRequest;
import com.elproyectegrande.codecool.auth.EditResponse;
import com.elproyectegrande.codecool.service.EditService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/dashboard")
public class EditController {

    private final EditService editService;

    public EditController(EditService editService) {
        this.editService = editService;
    }

    @PutMapping("/edit-user")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<EditResponse> edit(@RequestBody EditRequest request, @RequestParam String id) throws IOException {
        return editService.updateUser(request, id);
    }
}


