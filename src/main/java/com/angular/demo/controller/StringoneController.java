package com.angular.demo.controller;

import com.angular.demo.entity.Stringone;
import com.angular.demo.repository.StringoneRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StringoneController {

    final
    StringoneRepository stringoneRepository;

    public StringoneController(StringoneRepository stringoneRepository) {
        this.stringoneRepository = stringoneRepository;
    }


    @GetMapping()
    public List<Stringone> getStringone() {
        return (List<Stringone>) stringoneRepository.findAll();
    }

}