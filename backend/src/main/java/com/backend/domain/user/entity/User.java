package com.backend.domain.user.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class User {
    private int userPk;

    private String userId;

    private String userPassword;

    private String email;

    private String platform;
}
