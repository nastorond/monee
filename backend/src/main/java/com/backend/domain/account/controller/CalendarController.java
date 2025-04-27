package com.backend.domain.account.controller;

import com.backend.common.api.code.SuccessCode;
import com.backend.domain.account.dto.CalendarListResponseDto;
import com.backend.domain.account.service.CalendarService;
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
@RequestMapping("/calendar")
public class CalendarController {

    @Autowired
    CalendarService calendarService;

    @GetMapping("/getList")
    @ApiOperation(value = "월별 내역", notes = "달력 페이지에 해당 월 내역을 조회하는 api입니다.")
    public ResponseEntity<?> getCalendarList(
            @ApiParam(value="로그인 유저 아이디 정보", required = true) String userId,
            @ApiParam(value="조회하는 월 정보", required = true) String date) {


        CalendarListResponseDto calendarList = calendarService.getCalendarList(userId, YearMonth.parse(date));

        return success(SuccessCode.CALENDAR_LIST_RETRIEVED, calendarList);


    }
}
