package com.backend.common.api.code;

import lombok.Getter;

@Getter
public enum SuccessCode {

    // 성공 메시지
    OPERATION_SUCCESSFUL("성공적으로 완료되었습니다."),

    // Calendar
    CALENDAR_LIST_RETRIEVED("월별 목록 조회가 성공적으로 완료되었습니다."),

    // History
    HISTORY_DETAIL_LIST_RETRIEVED("월별 세부 내역 조회가 성공적으로 완료되었습니다."),
    CATEGORY_LIST_RETRIEVED("카테고리 목록 조회가 성공적으로 완료되었습니다.");


    private final String message;

    SuccessCode(String message) {
        this.message = message;
    }
}