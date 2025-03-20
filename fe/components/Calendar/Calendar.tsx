"use client";

import { useState } from "react";
import "./Calendar.css"; 
import Month from "./Month";
import Detail from "./Detail";

interface Transaction {
  date: string;
  type: "수입" | "지출";
  description: string;
  amount: number;
}

// 📌 예제 데이터 (날짜 형식 수정)
const transactions: Transaction[] = [
  { date: "2024-12-17", type: "지출", description: "점심 식사", amount: 10000 },
  { date: "2025-03-02", type: "수입", description: "예금 만기", amount: 25020000 },
  { date: "2025-03-02", type: "지출", description: "커피", amount: 4500 },
  { date: "2025-03-04", type: "지출", description: "커피", amount: 4500 },
  { date: "2025-03-05", type: "지출", description: "커피", amount: 4500 },
  { date: "2025-03-06", type: "지출", description: "커피", amount: 4500 },
  { date: "2025-03-07", type: "지출", description: "커피", amount: 4500 },
  { date: "2025-03-08", type: "지출", description: "커피", amount: 4500 },
  { date: "2025-03-09", type: "지출", description: "커피", amount: 4500 },
  { date: "2025-03-10", type: "지출", description: "커피", amount: 4500 },
  { date: "2025-03-10", type: "지출", description: "커피", amount: 4500 },
  { date: "2025-03-11", type: "지출", description: "커피", amount: 4500 },
  { date: "2025-03-11", type: "지출", description: "커피", amount: 4500 },
  { date: "2025-03-11", type: "지출", description: "커피", amount: 1500 },
  { date: "2025-03-12", type: "지출", description: "커피", amount: 4000 },
  { date: "2025-03-13", type: "지출", description: "커피", amount: 15000 },
  { date: "2025-03-14", type: "지출", description: "커피", amount: 4500 },
  { date: "2025-03-15", type: "지출", description: "문구", amount: 45200 },
  { date: "2025-03-16", type: "지출", description: "장난감", amount: 45500 },
  { date: "2025-03-17", type: "지출", description: "커피", amount: 4500 },
  { date: "2025-03-19", type: "지출", description: "커피", amount: 4500 },
  { date: "2025-03-19", type: "지출", description: "커피", amount: 4500 },
  { date: "2025-03-21", type: "지출", description: "커피", amount: 4500 },
  { date: "2025-03-23", type: "수입", description: "예금 만기", amount: 25020000 },
  { date: "2025-03-24", type: "수입", description: "월급", amount: 2500000 },
  { date: "2025-03-25", type: "수입", description: "보너스", amount: 300000 },
  { date: "2025-03-27", type: "지출", description: "커피", amount: 4500 },
  { date: "2025-02-15", type: "지출", description: "쇼핑", amount: 80000 },
];

const Calendar = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentYear, setCurrentYear] = useState<number>(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState<number>(today.getMonth() + 1);

  // 현재 월의 마지막 날짜 계산
  const getLastDay = (year: number, month: number) => new Date(year, month, 0).getDate();

  // 선택한 날짜의 거래 내역 필터링
  const Transactions = transactions.filter((t) =>
    t.date.startsWith(`${currentYear}-${currentMonth.toString().padStart(2, "0")}`)
  );

  // 오늘 날짜로 돌아가기
  const goToday = () => {
    setCurrentYear(today.getFullYear());
    setCurrentMonth(today.getMonth() + 1);
    setSelectedDate(`${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`);
  };
  
  return (
    <div className="calendar-detail-container">
      <div className="calendar-box">
        <Month
            currentYear={currentYear}
            currentMonth={currentMonth}
            setCurrentYear={setCurrentYear}
            setCurrentMonth={setCurrentMonth}
        />

        <button className="today-button" onClick={goToday}>오늘로 이동</button>

        <div className="calendar-grid">
          {[...Array(getLastDay(currentYear, currentMonth))].map((_, index) => {
            const day = index + 1;
            const dateKey = `${currentYear}-${currentMonth.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

            // 해당 날짜에 소비 내역이 있는지 확인
            const dayTransactions = transactions.filter((t) => t.date === dateKey);
            const incomeTotal = dayTransactions.filter(t => t.type === "수입").reduce((sum, t) => sum + t.amount, 0);
            const expenseTotal = dayTransactions.filter(t => t.type === "지출").reduce((sum, t) => sum + t.amount, 0);

            return (
              <div
                key={dateKey}
                className={`calendar-day ${selectedDate === dateKey ? "selected" : ""}`}
                onClick={() => setSelectedDate(dateKey)}
              >
                <span>{day}</span>
                {expenseTotal > 0 && <div className="expense-amount">-{expenseTotal.toLocaleString()}원</div>}
                {incomeTotal > 0 && <div className="income-amount">+{incomeTotal.toLocaleString()}원</div>}
              </div>
            );
          })}
        </div>
      </div>

      <Detail transactions={Transactions} selectedDate={selectedDate} />
    </div>
  );
};

export default Calendar;
