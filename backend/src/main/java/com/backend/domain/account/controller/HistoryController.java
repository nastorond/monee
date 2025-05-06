package com.backend.domain.account.controller;

import com.backend.common.api.code.SuccessCode;
import com.backend.domain.account.dto.HistoryListResponseDto;
import com.backend.domain.account.service.HistoryService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.YearMonth;

import static com.backend.common.api.ApiResponse.success;

@RestController
@RequestMapping("/history")
public class HistoryController {

    @Autowired
    HistoryService historyService;

   @GetMapping("/getDetail")
    @ApiOperation(value = "월별 세부 내역 조회", notes = "가계부 페이지에 해당 월 세부 내역을 대분류 별로 조회하는 api입니다.")
    public ResponseEntity<?> getDetailHistoryList(
        @ApiParam(value="로그인 유저 아이디 정보", required = true) String userId,
        @ApiParam(value="조회하는 월 정보", required = true) String date) {

       HistoryListResponseDto detailHistoryList = historyService.getDetailHistoryList(userId, YearMonth.parse(date));

       return success(SuccessCode.HISTORY_DETAIL_LIST_RETRIEVED, detailHistoryList);
    }


}
