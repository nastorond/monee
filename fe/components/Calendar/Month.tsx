"use client";

import React from "react";
import "./Calendar.css";

interface CalendarHeaderProps {
  currentYear: number;
  currentMonth: number;
  setCurrentYear: React.Dispatch<React.SetStateAction<number>>;
  setCurrentMonth: React.Dispatch<React.SetStateAction<number>>;
  goToday: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentYear,
  currentMonth,
  setCurrentYear,
  setCurrentMonth,
  goToday,
}) => {
  const changeMonth = (direction: "prev" | "next") => {
    setCurrentMonth((prevMonth) => {
      let newMonth = direction === "prev" ? prevMonth - 1 : prevMonth + 1;
      let newYear = currentYear;

      if (newMonth === 0) {
        newYear -= 1;
        newMonth = 12;
      } else if (newMonth === 13) {
        newYear += 1;
        newMonth = 1;
      }

      setCurrentYear(newYear);
      return newMonth;
    });
  };

  return (
    <div className="calendar-header relative flex items-center gap-10">
      <button className="cursor-pointer" onClick={() => changeMonth("prev")}>◀</button>
        <h2>{currentYear}년 {currentMonth}월</h2>
      <button className="cursor-pointer" onClick={() => changeMonth("next")}>▶</button>

      <button
        className="today-button absolute top-0 right-0"
        onClick={goToday}
      >
        📅
      </button>
    </div>
  );
};

export default CalendarHeader;
