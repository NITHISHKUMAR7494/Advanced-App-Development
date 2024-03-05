package com.eventrave.niranjanee.service;

import com.eventrave.niranjanee.dto.request.ThemeRequest;
import com.eventrave.niranjanee.dto.response.ThemeResponse;

public interface ThemeService  {
    ThemeResponse addtheme(ThemeRequest request);

    ThemeResponse getthemeinfo(String themeName);
    
    ThemeResponse deletetheme(String themeName);

    ThemeResponse editTheme(String themeName, ThemeRequest request);

}
