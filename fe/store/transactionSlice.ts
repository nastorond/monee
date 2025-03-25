// store/transactionSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Transaction {
  date: string;
  type: "수입" | "지출";
  description: string;
  amount: number;
}

interface TransactionState {
  all: Transaction[];
}

const initialState: TransactionState = {
  all: [
    { date: "2024-12-17", type: "지출", description: "점심 식사", amount: 10000 },
    { date: "2025-03-02", type: "수입", description: "예금 만기", amount: 25020000 },
    { date: "2025-03-02", type: "지출", description: "커피", amount: 4500 },
    { date: "2025-03-02", type: "지출", description: "커피", amount: 4500 },
    { date: "2025-03-02", type: "지출", description: "커피", amount: 4500 },
    { date: "2025-03-02", type: "지출", description: "커피", amount: 4500 },
    { date: "2025-03-02", type: "지출", description: "커피", amount: 4500 },
    { date: "2025-03-02", type: "지출", description: "커피", amount: 4500 },
    { date: "2025-03-04", type: "지출", description: "커피", amount: 4500 },
    { date: "2025-03-05", type: "지출", description: "커피", amount: 4500 },
    { date: "2025-03-06", type: "지출", description: "커피", amount: 4500 },
    { date: "2025-03-07", type: "지출", description: "커피", amount: 4500 },
    { date: "2025-03-08", type: "지출", description: "커피", amount: 4500 },
    { date: "2025-03-09", type: "지출", description: "커피", amount: 4500 },
    { date: "2025-03-10", type: "지출", description: "커피", amount: 4500 },
    { date: "2025-03-11", type: "지출", description: "커피", amount: 4500 },
    { date: "2025-03-12", type: "지출", description: "커피", amount: 4000 },
    { date: "2025-03-23", type: "수입", description: "예금 만기", amount: 25020000 },
    { date: "2025-03-24", type: "수입", description: "월급", amount: 2500000 },
    { date: "2025-03-24", type: "수입", description: "월급", amount: 2500000 },
    { date: "2025-03-24", type: "수입", description: "월급", amount: 2500000 },
    { date: "2025-03-24", type: "수입", description: "월급", amount: 2500000 },
    { date: "2025-03-24", type: "수입", description: "월급", amount: 2500000 },
    { date: "2025-03-24", type: "수입", description: "월급", amount: 2500000 },
    { date: "2025-03-25", type: "수입", description: "보너스", amount: 300000 },
    { date: "2025-02-15", type: "지출", description: "쇼핑", amount: 80000 },
  ],
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.all.push(action.payload);
    },
  },
});

export const { addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
