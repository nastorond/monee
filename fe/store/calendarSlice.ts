import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalendarState {
  year: number;
  month: number;
  selectedDate: string | null;
}

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
    goToday: (state) => {
      const now = new Date();
      state.year = now.getFullYear();
      state.month = now.getMonth() + 1;
      state.selectedDate = formattedToday;
    },
    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { setYear, setMonth, goToday, setSelectedDate } = calendarSlice.actions;
export default calendarSlice.reducer;