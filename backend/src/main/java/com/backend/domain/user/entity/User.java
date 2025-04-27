package com.backend.domain.user.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class User {
    private int userId;

    private String email;

    private String password;

    private int platformId;

    private LocalDateTime createdAt;
}
