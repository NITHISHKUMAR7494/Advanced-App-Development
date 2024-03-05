package com.eventrave.niranjanee.service.impl;

import org.springframework.stereotype.Service;

import com.eventrave.niranjanee.dto.request.FoodRequest;
import com.eventrave.niranjanee.dto.response.FoodResponse;
import com.eventrave.niranjanee.model.Food;
import com.eventrave.niranjanee.repository.FoodRepository;
import com.eventrave.niranjanee.service.FoodService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FoodServiceImpl implements FoodService {

    private final FoodRepository foodRepository;

    @Override
    public FoodResponse addfood(FoodRequest request) {
       var food = Food.builder().foodName(request.getFoodName()).foodDesc(request.getFoodDesc()).foodPrice(request.getFoodPrice()).build();
        foodRepository.save(food);
        
        return FoodResponse.builder().foodName(request.getFoodName()).foodDesc(request.getFoodDesc()).foodPrice(request.getFoodPrice()).message("Food added successfully").build();
    }

    @Override
    public FoodResponse getfoodinfo(String foodName) {
        Food food = foodRepository.findByFoodName(foodName);
    return FoodResponse.builder()
            .foodName(food != null ? food.getFoodName() : null)
            .foodDesc(food != null ? food.getFoodDesc() : null)
            .foodPrice(food != null ? food.getFoodPrice() : 0.0f)
            .message(food != null ? null : "No such theme found: " + foodName)
            .build();
    }

    @Override
    public FoodResponse deletefood(String foodName) {
        try {
            Food food = foodRepository.findByFoodName(foodName);
            if (food != null) {
                foodRepository.delete(food);
                return FoodResponse.builder().message("Food deleted successfully").build();
            } else {
                return FoodResponse.builder().message("No such food found: " + foodName).build();
            }
        } catch (Exception e) {
            return FoodResponse.builder().message("Failed to delete food").build();
        }
    }

    @Override
    public FoodResponse editfood(String foodName, FoodRequest request) {
        Food food = foodRepository.findByFoodName(foodName);
        if (food != null) {
            try {
                food.setFoodDesc(request.getFoodDesc());
                food.setFoodPrice(request.getFoodPrice());
                foodRepository.save(food);
                return FoodResponse.builder()
                    .foodName(food.getFoodName())
                    .foodDesc(food.getFoodDesc())
                    .foodPrice(food.getFoodPrice())
                    .message("Food updated successfully")
                    .build();
            } catch (Exception e) {
                return FoodResponse.builder().message("Failed to update food").build();
            }
        } else {
            return FoodResponse.builder().message("No such food found: " + foodName).build();
        }
    }

   
}
