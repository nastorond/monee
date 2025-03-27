// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "./calendarSlice";
import transactionReducer from "./transactionSlice";

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    transactions: transactionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
