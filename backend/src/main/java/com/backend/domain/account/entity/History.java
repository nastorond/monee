package com.backend.domain.account.entity;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class History {

    private int historyId;

    private int userId;

    private int categoryId;

    private boolean income;

    private String comment;

    private int amount;

    private LocalDateTime date;

    private boolean isDelete;
}
