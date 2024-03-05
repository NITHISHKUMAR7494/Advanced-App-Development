package com.eventrave.niranjanee.service;

import com.eventrave.niranjanee.dto.request.FoodRequest;
import com.eventrave.niranjanee.dto.response.FoodResponse;

public interface FoodService {

    FoodResponse addfood(FoodRequest request);

    FoodResponse getfoodinfo(String foodName);
    
    FoodResponse deletefood(String foodName);

    FoodResponse editfood(String foodName, FoodRequest request);
}
