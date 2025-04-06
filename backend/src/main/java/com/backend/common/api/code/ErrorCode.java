package com.backend.common.api.code;

import lombok.Getter;

@Getter
public enum ErrorCode {

    // 오류 메시지
    INTERNAL_SERVER_ERROR("서버 내부 오류입니다.");
;

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }
}