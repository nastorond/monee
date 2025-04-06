package com.backend.common.api.code;

import lombok.Getter;

@Getter
public enum FailedCode {

    // 실패 메시지
    BAD_REQUEST("잘못된 요청입니다."),
    VALIDATION_FAILED("유효성 검사에 실패하였습니다.");


    private final String message;

    FailedCode(String message) {
        this.message = message;
    }
}