"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { setYear, setMonth, goToday } from "../../store/calendarSlice";
import "./Calendar.css";

const Month = () => {
  const dispatch = useDispatch();
  const year = useSelector((state: RootState) => state.calendar.year);
  const month = useSelector((state: RootState) => state.calendar.month);

  const changeMonth = (direction: "prev" | "next") => {
    let newMonth = direction === "prev" ? month - 1 : month + 1;
    let newYear = year;

    if (newMonth === 0) {
      newYear -= 1;
      newMonth = 12;
    } else if (newMonth === 13) {
      newYear += 1;
      newMonth = 1;
    }

    dispatch(setYear(newYear));
    dispatch(setMonth(newMonth));
  };

  return (
    <div className="calendar-header relative flex items-center gap-10">
      <button className="cursor-pointer" onClick={() => changeMonth("prev")}>◀</button>
      <h2>{year}년 {month}월</h2>
      <button className="cursor-pointer" onClick={() => changeMonth("next")}>▶</button>
      <button
        className="today-button absolute top-0 right-0"
        onClick={() => dispatch(goToday())}
      >
        📅
      </button>
    </div>
  );
};

export default Month;
