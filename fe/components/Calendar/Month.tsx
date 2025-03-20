"use client";

import React from "react";
import "./Calendar.css";

interface CalendarHeaderProps {
  currentYear: number;
  currentMonth: number;
  setCurrentYear: React.Dispatch<React.SetStateAction<number>>;
  setCurrentMonth: React.Dispatch<React.SetStateAction<number>>;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentYear,
  currentMonth,
  setCurrentYear,
  setCurrentMonth,
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
    <div className="calendar-header">
      <button onClick={() => changeMonth("prev")}>◀</button>
      <h2>{currentYear}년 {currentMonth}월</h2>
      <button onClick={() => changeMonth("next")}>▶</button>
    </div>
  );
};

export default CalendarHeader;
