// store/calendarSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 추가 (이미 돼 있을 수도 있음)
interface CalendarState {
  year: number;
  month: number;
  selectedDate: string | null;
}

// 초기값
const today = new Date();
const formattedToday = `${today.getFullYear()}-${(today.getMonth() + 1)
  .toString()
  .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;

const initialState: CalendarState = {
  year: today.getFullYear(),
  month: today.getMonth() + 1,
  selectedDate: formattedToday,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setYear: (state, action: PayloadAction<number>) => {
      state.year = action.payload;
    },
    setMonth: (state, action: PayloadAction<number>) => {
      state.month = action.payload;
    },
    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
    goToday: (state) => {
      const now = new Date();
      const formatted = `${now.getFullYear()}-${(now.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")}`;

      state.year = now.getFullYear();
      state.month = now.getMonth() + 1;
      state.selectedDate = formatted;
    },
  },
});

export const { setYear, setMonth, setSelectedDate, goToday } = calendarSlice.actions;
export default calendarSlice.reducer;
