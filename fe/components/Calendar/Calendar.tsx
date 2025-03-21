"use client";

import { useState } from "react";
import Month from "./Month";
import Detail from "./Detail";
import "./Calendar.css"; 

interface Transaction {
  date: string;
  type: "수입" | "지출";
  description: string;
  amount: number;
}

// 예제 데이터 (날짜 형식 수정)
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
  const formattedToday = `${today.getFullYear()}-${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;

  const [selectedDate, setSelectedDate] = useState<string>(formattedToday);
  const [currentYear, setCurrentYear] = useState<number>(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState<number>(today.getMonth() + 1);

  const getLastDay = (year: number, month: number) => new Date(year, month, 0).getDate();

  const Transactions = transactions.filter((t) =>
    t.date.startsWith(`${currentYear}-${currentMonth.toString().padStart(2, "0")}`)
  );

  const goToday = () => {
    setCurrentYear(today.getFullYear());
    setCurrentMonth(today.getMonth() + 1);
    setSelectedDate(formattedToday);
  };
  
  const getMonthlyTotal = (type: "수입" | "지출") => {
    return transactions
      .filter((t) => t.date.startsWith(`${currentYear}-${currentMonth.toString().padStart(2, "0")}`) && t.type === type)
      .reduce((sum, t) => sum + t.amount, 0);
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month - 1, 1).getDay();
  };

  const getLastDayPrevMonth = (year: number, month: number) => {
    return new Date(year, month - 1, 0).getDate();
  };

  return (
    <div className="calendar-container flex flex-col items-center w-full h-screen p-5">
      <div className="calendar-detail-container flex gap-10 justify-center w-full max-w-[1200px]">
        <div className="calendar-box bg-white p-4 rounded-xl shadow-md w-[800px] min-h-[650px]">
          <Month
            currentYear={currentYear}
            currentMonth={currentMonth}
            setCurrentYear={setCurrentYear}
            setCurrentMonth={setCurrentMonth}
            goToday={goToday}
          />

          <div className="weekdays grid grid-cols-7 text-center font-bold text-gray-700">
            {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
              <div key={day} className="py-2">{day}</div>
            ))}
          </div>

          <div className="calendar-grid">
            {/* 이전 달 */}
            {[...Array(getFirstDayOfMonth(currentYear, currentMonth))].map((_, index) => {
              const prevMonthDate = getLastDayPrevMonth(currentYear, currentMonth) - index;
              return (
                <div key={`prev-${index}`} className="calendar-day prev-month text-gray-400">
                  {prevMonthDate}
                </div>
              );
            })}
  
            {/* 이번 달 */}
            {[...Array(getLastDay(currentYear, currentMonth))].map((_, index) => {
              const day = index + 1;
              const dateKey = `${currentYear}-${currentMonth.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
  
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
  
            {/* 다음 달 */}
            {[...Array(42 - (getFirstDayOfMonth(currentYear, currentMonth) + getLastDay(currentYear, currentMonth)))].map((_, index) => {
              return (
                <div key={`next-${index}`} className="calendar-day next-month text-gray-400">
                  {index + 1}
                </div>
              );
            })}
          </div>
  
          <div className="calendar-summary">
            <span className="income-summary text-[#2563D9]">총 수입: +{getMonthlyTotal("수입").toLocaleString()}원</span>
            <span className="expense-summary text-[#E7414C]">총 지출: -{getMonthlyTotal("지출").toLocaleString()}원</span>
          </div>
        </div>
  
        <Detail transactions={Transactions} selectedDate={selectedDate} />
      </div>
    </div>
  );
};

export default Calendar;
