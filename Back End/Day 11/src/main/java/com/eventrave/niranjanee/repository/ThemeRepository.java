package com.eventrave.niranjanee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eventrave.niranjanee.model.Theme;
@Repository
public interface ThemeRepository extends JpaRepository<Theme,Integer> {
    Theme findByThemeName(String themeName);
}
