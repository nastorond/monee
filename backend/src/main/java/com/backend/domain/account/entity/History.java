package com.backend.domain.account.entity;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Getter
@Setter
@ToString
public class History {

    private int historyId;

    private int userId;

    private int classificationId;

    private int categoryId;

    private String comment;

    private int amount;

    private Date date;

    private boolean isDelete;
}
