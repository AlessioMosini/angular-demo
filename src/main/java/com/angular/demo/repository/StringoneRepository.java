package com.angular.demo.repository;

import com.angular.demo.entity.Stringone;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StringoneRepository extends CrudRepository<Stringone, Long> {}