package com.eventrave.niranjanee.service;

import java.io.IOException;

import com.eventrave.niranjanee.dto.request.LoginRequest;
import com.eventrave.niranjanee.dto.request.RegisterRequest;
import com.eventrave.niranjanee.dto.response.LoginResponse;
import com.eventrave.niranjanee.dto.response.RegisterResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;
}
