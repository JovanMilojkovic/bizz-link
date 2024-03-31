package com.elproyectegrande.codecool;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class CodecoolApplication {
	public static void main(String[] args) {
		SpringApplication.run(CodecoolApplication.class, args);
	}
}


