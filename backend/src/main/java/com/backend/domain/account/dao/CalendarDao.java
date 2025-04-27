package com.backend.domain.account.dao;

import com.backend.domain.account.dto.CalendarListResponseDto;
import com.backend.domain.account.dto.HistoryDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.time.YearMonth;
import java.util.List;

@Mapper
public interface CalendarDao {

    // 총 결산 내역 - 총수입, 총지출
    public CalendarListResponseDto getTotalAmountByMonth(@Param("userId") String userId, @Param("date") YearMonth date);

    // 월별 내역
    public List<HistoryDto> findHistoryByMonth(@Param("userId") String userId, @Param("date") YearMonth date);


}
