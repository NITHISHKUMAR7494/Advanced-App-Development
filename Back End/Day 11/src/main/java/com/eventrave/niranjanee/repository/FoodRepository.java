package com.eventrave.niranjanee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eventrave.niranjanee.model.Food;

@Repository
public interface FoodRepository extends JpaRepository<Food, Integer> {
    Food findByFoodName(String foodName);

}
