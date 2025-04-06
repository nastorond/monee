package com.backend.common.api.code;

import lombok.Getter;

@Getter
public enum SuccessCode {

    // 성공 메시지
    OPERATION_SUCCESSFUL("성공적으로 완료되었습니다.");

    private final String message;

    SuccessCode(String message) {
        this.message = message;
    }
}