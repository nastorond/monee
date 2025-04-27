package com.backend.domain.account.service;

import com.backend.domain.account.dao.CalendarDao;
import com.backend.domain.account.dto.CalendarListResponseDto;
import com.backend.domain.account.dto.HistoryDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.YearMonth;
import java.util.List;


@Slf4j
@Service
@RequiredArgsConstructor
public class CalendarService {

    @Autowired
    CalendarDao calendarDao;

    // 월별 목록 조회
    public CalendarListResponseDto getCalendarList(String userId, YearMonth date){

        CalendarListResponseDto totalAmount = calendarDao.getTotalAmountByMonth(userId, date);
        List<HistoryDto> historyList = calendarDao.findHistoryByMonth(userId, date);

        return new CalendarListResponseDto(
                totalAmount.getTotalIncome(),
                totalAmount.getTotalExpenses(),
                historyList
        );
    }

}
