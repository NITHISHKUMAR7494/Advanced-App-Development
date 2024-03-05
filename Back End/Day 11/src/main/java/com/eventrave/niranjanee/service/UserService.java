package com.eventrave.niranjanee.service;

import java.security.Principal;

import com.eventrave.niranjanee.dto.request.PasswordRequest;

public interface UserService {

    void forgotPassword(PasswordRequest request, Principal principal);

}
