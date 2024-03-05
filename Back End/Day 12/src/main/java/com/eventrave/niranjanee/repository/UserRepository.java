package com.eventrave.niranjanee.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventrave.niranjanee.model.User;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);
}
