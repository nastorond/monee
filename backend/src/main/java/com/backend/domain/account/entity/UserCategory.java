package com.backend.domain.account.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserCategory {
    private int userCategoryId;

    private int categoryId;

    private int userId;

    private boolean status;
}
