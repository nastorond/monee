package com.backend.domain.account.service;

import com.backend.domain.account.dao.HistoryDao;
import com.backend.domain.account.dto.HistoryDto;
import com.backend.domain.account.dto.HistoryListResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.YearMonth;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Slf4j
@Service
@RequiredArgsConstructor
public class HistoryService {

    @Autowired
    HistoryDao historyDao;

    // 월별 목록 조회
    public HistoryListResponseDto getDetailHistoryList(String userId, YearMonth date){

        HistoryListResponseDto totalAmount = historyDao.getTotalAmountByMonth(userId, date);

        List<HistoryDto> historyList = historyDao.findHistoryByMonth(userId, date);
        Map<String, List<HistoryDto>> groupedHistoryByClassification = new HashMap<>();
        for (HistoryDto detailHistory : historyList) {
            groupedHistoryByClassification.computeIfAbsent(detailHistory.getClassificationName(), k -> new ArrayList<>()).add(detailHistory);
        }
        return new HistoryListResponseDto(
                totalAmount.getTotalIncome(),
                totalAmount.getTotalExpenses(),
                groupedHistoryByClassification
        );
    }

}
