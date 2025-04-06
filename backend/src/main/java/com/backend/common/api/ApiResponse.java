package com.backend.common.api;

import com.backend.common.api.code.SuccessCode;
import com.backend.common.api.code.FailedCode;
import com.backend.common.api.code.ErrorCode;
import lombok.*;

import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Component;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class ApiResponse {

    public enum ResponseStatus {
        SUCCESS, FAIL, ERROR
    }

    /**
     * API 응답을 생성하는 메서드입니다.
     *
     * @param status  API 요청의 상태 값 (SUCCESS, FAIL, ERROR)
     * @param message 응답 메시지
     * @param data    성공 시 반환할 데이터
     * @param errors  실패 시 반환할 에러 정보
     * @param page    페이징 정보 중 현재 페이지 번호
     * @param size    페이징 정보 중 페이지 크기
     * @param total   페이징 정보 중 전체 데이터 개수
     * @param <T>     성공 시 반환할 데이터의 타입
     * @param <E>     실패 시 반환할 에러 정보의 타입
     * @return 상태 값에 따른 API 응답 객체
     */
    private static <T, E> ResponseEntity<?> get(ResponseStatus status,
                                                @Nullable String message,
                                                @Nullable T data,
                                                @Nullable E errors,
                                                @Nullable Integer page,
                                                @Nullable Integer size,
                                                @Nullable Long total) {

        switch (status) {
            case SUCCESS -> {
                if (Optional.ofNullable(page).isPresent() && Optional.ofNullable(size).isPresent() && Optional.ofNullable(total).isPresent()) {
                    return new ResponseEntity<>(PagedBody.<T>builder()
                                                         .status(status.name())
                                                         .message(message)
                                                         .data(data)
                                                         .page(page)
                                                         .size(size)
                                                         .total(total)
                                                         .build(),
                                                HttpStatus.OK);
                } else {
                    return new ResponseEntity<>(SucceededBody.<T>builder()
                                                             .status(status.name())
                                                             .message(message)
                                                             .data(data)
                                                             .build(),
                                                HttpStatus.OK);
                }
            }
            case FAIL -> {
                return new ResponseEntity<>(FailedBody.<E>builder()
                                                      .status(status.name())
                                                      .message(message)
                                                      .errors(errors)
                                                      .build(),
                                            HttpStatus.BAD_REQUEST);
            }
            case ERROR -> {
                return new ResponseEntity<>(ErroredBody.builder()
                                                       .status(status.name())
                                                       .message(message)
                                                       .build(),
                                            HttpStatus.INTERNAL_SERVER_ERROR);
            }
            default -> throw new RuntimeException("Api Response Error");
        }
    }

    /**
     * 성공 응답을 반환합니다.
     *
     * <pre>
     * {
     *   "status": "SUCCESS",
     *   "message": null,
     *   "data": { ... }
     * }
     * </pre>
     *
     * @param data 성공 시 반환할 데이터
     * @param <T>  데이터의 타입
     * @return 응답 객체
     * @example 사용 예시: ApiResponse.success(userData);
     */
    public static <T> ResponseEntity<?> success(T data) {
        return get(ResponseStatus.SUCCESS, null, data, null, null, null, null);
    }

    /**
     * 성공 응답을 반환합니다.
     *
     * <pre>
     * {
     *   "status": "SUCCESS",
     *   "message": "성공 메시지",
     *   "data": { ... }
     * }
     * </pre>
     *
     * @param responseCode 성공 코드
     * @param data         성공 시 반환할 데이터
     * @param <T>          데이터의 타입
     * @return 응답 객체
     * @example 사용 예시: ApiResponse.success(SuccessCode.OPERATION_COMPLETED, userData);
     */
    public static <T> ResponseEntity<?> success(SuccessCode responseCode, T data) {
        return get(ResponseStatus.SUCCESS, responseCode.getMessage(), data, null, null, null, null);
    }

    /**
     * 성공 응답을 반환합니다.
     *
     * <pre>
     * {
     *   "status": "SUCCESS",
     *   "message": "성공 메시지",
     *   "data": null
     * }
     * </pre>
     *
     * @param responseCode 성공 코드
     * @return 응답 객체
     * @example 사용 예시: ApiResponse.success(SuccessCode.OPERATION_COMPLETED);
     */
    public static ResponseEntity<?> success(SuccessCode responseCode) {
        return get(ResponseStatus.SUCCESS, responseCode.getMessage(), null, null, null, null, null);
    }

    /**
     * 성공 응답을 반환합니다.
     *
     * <pre>
     * {
     *   "status": "SUCCESS",
     *   "message": null,
     *   "data": null
     * }
     * </pre>
     *
     * @return 응답 객체
     * @example 사용 예시: ApiResponse.success();
     */
    public static ResponseEntity<?> success() {
        return get(ResponseStatus.SUCCESS, null, null, null, null, null, null);
    }

    /**
     * 페이지네이션 정보를 포함한 성공 응답을 반환합니다.
     *
     * <pre>
     * {
     *   "status": "SUCCESS",
     *   "message": null,
     *   "data": { ... },
     *   "page": 1,
     *   "size": 10,
     *   "total": 100
     * }
     * </pre>
     *
     * @param data  성공 시 반환할 데이터
     * @param page  현재 페이지 번호
     * @param size  페이지 크기
     * @param total 전체 데이터 개수
     * @param <T>   데이터의 타입
     * @return 응답 객체
     * @example 사용 예시: ApiResponse.pagination(userData, 1, 10, 100L);
     */
    public static <T> ResponseEntity<?> pagination(T data, Integer page, Integer size, Long total) {
        return get(ResponseStatus.SUCCESS, null, data, null, page, size, total);
    }

    /**
     * 페이지네이션 정보를 포함한 성공 응답을 반환합니다.
     *
     * <pre>
     * {
     *   "status": "SUCCESS",
     *   "message": null,
     *   "data": { ... },
     *   "page": 1,
     *   "size": 10,
     *   "total": 100
     * }
     * </pre>
     *
     * @param data     성공 시 반환할 데이터
     * @param pageable 페이징 정보
     * @param total    전체 데이터 개수
     * @param <T>      데이터의 타입
     * @return 응답 객체
     * @example 사용 예시: Pageable pageable = PageRequest.of(1, 10); ApiResponse.pagination(userData, pageable, 100L);
     */
    public static <T> ResponseEntity<?> pagination(T data, Pageable pageable, Long total) {
        return get(ResponseStatus.SUCCESS, null, data, null, pageable.getPageNumber(), pageable.getPageSize(), total);
    }

    /**
     * 실패 응답을 반환합니다.
     *
     * <pre>
     * {
     *   "status": "FAIL",
     *   "message": "실패 메시지",
     *   "errors": null
     * }
     * </pre>
     *
     * @param failedCode 실패 코드
     * @return 응답 객체
     * @example 사용 예시: ApiResponse.fail(FailedCode.DATA_NOT_FOUND);
     */
    public static ResponseEntity<?> fail(FailedCode failedCode) {
        return get(ResponseStatus.FAIL, failedCode.getMessage(), null, null, null, null, null);
    }

    /**
     * 실패 응답을 반환합니다.
     *
     * <pre>
     * {
     *   "status": "FAIL",
     *   "message": "실패 메시지",
     *   "errors": { ... }
     * }
     * </pre>
     *
     * @param failedCode 실패 코드
     * @param errors     에러 정보
     * @param <E>        에러 정보의 타입
     * @return 응답 객체
     * @example 사용 예시: List<String> errorList = Arrays.asList("Error 1", "Error 2"); ApiResponse.fail(FailedCode.VALIDATION_FAILED, errorList);
     */
    public static <E> ResponseEntity<?> fail(FailedCode failedCode, E errors) {
        return get(ResponseStatus.FAIL, failedCode.getMessage(), null, errors, null, null, null);
    }

    /**
     * 필드 에러로 인한 실패 응답을 반환합니다.
     *
     * <pre>
     * {
     *   "status": "FAIL",
     *   "message": "실패 메시지",
     *   "errors": [{ "field": "필드명", "message": "에러 메시지" }]
     * }
     * </pre>
     *
     * @param failedCode 실패 코드
     * @param errors     필드 에러 정보
     * @return 응답 객체
     * @example 사용 예시: Errors errors = ...; ApiResponse.fail(FailedCode.VALIDATION_FAILED, errors);
     */
    public static ResponseEntity<?> fail(FailedCode failedCode, Errors errors) {
        List<FieldError> fieldErrorList = errors.getAllErrors().stream().map(FieldError::new)
                                                .collect(Collectors.toList());
        return fail(failedCode, fieldErrorList);
    }

    /**
     * 필드 에러로 인한 실패 응답을 반환합니다.
     *
     * <pre>
     * {
     *   "status": "FAIL",
     *   "message": "실패 메시지",
     *   "errors": [{ "field": "필드명", "message": "에러 메시지" }]
     * }
     * </pre>
     *
     * @param bindingResult 필드 에러 정보
     * @return 응답 객체
     * @example 사용 예시: BindingResult bindingResult = ...; ApiResponse.fail(bindingResult);
     */
    public static ResponseEntity<?> fail(BindingResult bindingResult) {
        return fail(FailedCode.VALIDATION_FAILED, bindingResult);
    }

    /**
     * 에러 정보를 포함한 실패 응답을 반환합니다.
     *
     * <pre>
     * {
     *   "status": "FAIL",
     *   "message": null,
     *   "errors": { ... }
     * }
     * </pre>
     *
     * @param errors 에러 정보
     * @param <E>    에러 정보의 타입
     * @return 응답 객체
     * @example 사용 예시: List<String> errorList = Arrays.asList("Error 1", "Error 2"); ApiResponse.fail(errorList);
     */
    public static <E> ResponseEntity<?> fail(E errors) {
        return get(ResponseStatus.FAIL, null, null, errors, null, null, null);
    }

    /**
     * 에러 응답을 반환합니다.
     *
     * <pre>
     * {
     *   "status": "ERROR",
     *   "message": "에러 메시지"
     * }
     * </pre>
     *
     * @param message 에러 메시지
     * @return 응답 객체
     * @example 사용 예시: ApiResponse.error("Unexpected error occurred");
     */
    public static ResponseEntity<?> error(String message) {
        return get(ResponseStatus.ERROR, message, null, null, null, null, null);
    }

    /**
     * 에러 응답을 반환합니다.
     *
     * <pre>
     * {
     *   "status": "ERROR",
     *   "message": "에러 코드 메시지"
     * }
     * </pre>
     *
     * @param errorCode 에러 코드
     * @return 응답 객체
     * @example 사용 예시: ApiResponse.error(ErrorCode.INTERNAL_SERVER_ERROR);
     */
    public static ResponseEntity<?> error(ErrorCode errorCode) {
        return get(ResponseStatus.ERROR, errorCode.getMessage(), null, null, null, null, null);
    }

    @Builder
    @Setter
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class SucceededBody<T> {

        private String status;
        private String message;
        private T data;
    }

    @Builder
    @Setter
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class PagedBody<T> {

        private String status;
        private String message;
        private T data;
        private int page;
        private int size;
        private Long total;
    }

    @Builder
    @Setter
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class FailedBody<E> {

        private String status;
        private String message;
        private E errors;
    }

    @Builder
    @Setter
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ErroredBody {

        private String status;
        private String message;
    }

    @Builder
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class FieldError {

        private String field;
        private String message;

        public FieldError(ObjectError objectError) {
            this.field = objectError.getObjectName();
            this.message = objectError.getDefaultMessage();
        }
    }
}