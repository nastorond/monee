package com.backend.domain.account.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Category {
    private int categoryId;

    private int userId;

    private String categoryName;

    private boolean isActive = true;
}
