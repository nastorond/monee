"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setYear, setMonth } from "@/store/calendarSlice";
import { RootState } from "@/store";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const MonthPicker = () => {
  const dispatch = useDispatch();
  const year = useSelector((state: RootState) => state.calendar.year);
  const month = useSelector((state: RootState) => state.calendar.month);
  const [viewYear, setViewYear] = useState(year);
  const [open, setOpen] = useState(false);

  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleMonthClick = (m: number) => {
    dispatch(setYear(viewYear));
    dispatch(setMonth(m));
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[140px]">
          {`${year}년 ${month.toString().padStart(2, "0")}월`}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[250px] p-4 text-center">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => setViewYear(viewYear - 1)} className="text-xl">
            ◀
          </button>
          <span className="font-semibold text-base">{viewYear}년</span>
          <button onClick={() => setViewYear(viewYear + 1)} className="text-xl">
            ▶
          </button>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {months.map((m) => (
            <button
              key={m}
              onClick={() => handleMonthClick(m)}
              className={`py-2 text-sm rounded-md transition font-medium
                ${year === viewYear && m === month
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-blue-100"}
              `}
            >
              {m}월
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MonthPicker;
