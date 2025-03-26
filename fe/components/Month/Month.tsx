"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { setYear, setMonth, goToday } from "../../store/calendarSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MonthPicker from "./MonthPicker";

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
    <div className="calendar-header relative flex items-center gap-4 sm:gap-6">
      {/* ◀ 버튼 */}
      <button
        className="text-gray-600 hover:text-black transition"
        onClick={() => changeMonth("prev")}
      >
        <ChevronLeft size={20} />
      </button>

      <MonthPicker />
    
      {/* ▶ 버튼 */}
      <button
        className="text-gray-600 hover:text-black transition"
        onClick={() => changeMonth("next")}
      >
        <ChevronRight size={20} />
      </button>

      <button
        className="today-button absolute top-0 right-0 text-sm text-white rounded px-3 py-1 hover:bg-blue-600 transition"
        onClick={() => dispatch(goToday())}
      >
        📅
      </button>
    </div>
  );
};

export default Month;
