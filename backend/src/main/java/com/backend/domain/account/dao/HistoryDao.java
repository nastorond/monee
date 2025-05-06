package com.backend.domain.account.dao;

import com.backend.domain.account.dto.CategoryDto;
import com.backend.domain.account.dto.HistoryDto;
import com.backend.domain.account.dto.HistoryListResponseDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.time.YearMonth;
import java.util.List;

@Mapper
public interface HistoryDao {

    // 총 결산 내역 - 총수입, 총지출
    public HistoryListResponseDto getTotalAmountByMonth(@Param("userId") String userId, @Param("date") YearMonth date);

    // 월별 내역
    public List<HistoryDto> findHistoryByMonth(@Param("userId") String userId, @Param("date") YearMonth date);

    // 카테고리 리스트 조회
    public List<CategoryDto> getCategoryList(String userId);

}
