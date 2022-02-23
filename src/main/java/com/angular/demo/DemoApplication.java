package com.angular.demo;

import com.angular.demo.entity.Stringone;
import com.angular.demo.repository.StringoneRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Bean
    CommandLineRunner init(StringoneRepository stringoneRepository) {
        return args -> {
            Stream.of("ciaone", "ciaone2", "ciaone3", "ciaone4", "ciaone5", "ciaone6", "ciaone7")
                    .forEach(stringone -> stringoneRepository.save(Stringone.builder().name(stringone).build()));
            stringoneRepository.findAll().forEach(System.out::println);
        };
    }

}
