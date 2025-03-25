"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setSelectedDate } from "../../store/calendarSlice";
import Month from "./Month";
import Detail from "./Detail";
import { useMemo } from "react";
import "./Calendar.css";

const Calendar = () => {
  const dispatch = useDispatch();

  const year = useSelector((state: RootState) => state.calendar.year);
  const month = useSelector((state: RootState) => state.calendar.month);
  const selectedDate = useSelector((state: RootState) => state.calendar.selectedDate);
  const transactions = useSelector((state: RootState) => state.transactions.all);

  const currentMonthStr = month.toString().padStart(2, "0");

  const filteredTransactions = useMemo(() => {
    return transactions.filter((t) =>
      t.date.startsWith(`${year}-${currentMonthStr}`)
    );
  }, [transactions, year, month]);

  const getLastDay = (year: number, month: number) =>
    new Date(year, month, 0).getDate();

  const getFirstDayOfMonth = (year: number, month: number) =>
    new Date(year, month - 1, 1).getDay();

  const getLastDayPrevMonth = (year: number, month: number) =>
    new Date(year, month - 1, 0).getDate();

  const getMonthlyTotal = (type: "수입" | "지출") => {
    return filteredTransactions
      .filter((t) => t.type === type)
      .reduce((sum, t) => sum + t.amount, 0);
  };

  return (
    <div className="calendar-container flex flex-col justify-center items-center w-full min-h-screen p-5">
      <div className="calendar-detail-container flex gap-20 items-start w-full max-w-[1200px]">
        <div className="calendar-box bg-white p-4 rounded-xl shadow-md w-[800px] min-h-[650px]">
          <Month />

          <div className="weekdays grid grid-cols-7 text-center font-bold text-gray-700">
            {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
              <div key={day} className="py-2">{day}</div>
            ))}
          </div>

          <div className="calendar-grid">
            {/* 이전 달 */}
            {[...Array(getFirstDayOfMonth(year, month))].map((_, index) => {
              const prevDay =
                getLastDayPrevMonth(year, month) -
                getFirstDayOfMonth(year, month) +
                index + 1;
              return (
                <div key={`prev-${index}`} className="calendar-day text-gray-400">
                  {prevDay}
                </div>
              );
            })}

            {/* 이번 달 */}
            {[...Array(getLastDay(year, month))].map((_, index) => {
              const day = index + 1;
              const dateKey = `${year}-${currentMonthStr}-${day
                .toString()
                .padStart(2, "0")}`;

              const dayTransactions = transactions.filter((t) => t.date === dateKey);
              const incomeTotal = dayTransactions
                .filter((t) => t.type === "수입")
                .reduce((sum, t) => sum + t.amount, 0);
              const expenseTotal = dayTransactions
                .filter((t) => t.type === "지출")
                .reduce((sum, t) => sum + t.amount, 0);

              return (
                <div
                  key={dateKey}
                  className={`calendar-day ${selectedDate === dateKey ? "selected" : ""}`}
                  onClick={() => dispatch(setSelectedDate(dateKey))}
                >
                  <span>{day}</span>
                  {incomeTotal > 0 && (
                    <div className="income-amount">+{incomeTotal.toLocaleString()}원</div>
                  )}
                  {expenseTotal > 0 && (
                    <div className="expense-amount">-{expenseTotal.toLocaleString()}원</div>
                  )}
                </div>
              );
            })}

            {/* 다음 달 */}
            {[...Array(
              42 - (getFirstDayOfMonth(year, month) + getLastDay(year, month))
            )].map((_, index) => (
              <div key={`next-${index}`} className="calendar-day text-gray-400">
                {index + 1}
              </div>
            ))}
          </div>

          <div className="calendar-summary flex justify-between mt-4 text-sm font-semibold">
            <span className="text-blue-600">
              총 수입: +{getMonthlyTotal("수입").toLocaleString()}원
            </span>
            <span className="text-red-500">
              총 지출: -{getMonthlyTotal("지출").toLocaleString()}원
            </span>
          </div>
        </div>

        <Detail transactions={filteredTransactions} />
      </div>
    </div>
  );
};

export default Calendar;
