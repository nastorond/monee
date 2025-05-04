package com.backend.domain.account.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Classification {
    private int classificationId;

    private int isIncome;

    private String classificationName;

    private boolean isActive = true;
}
