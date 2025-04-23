import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTransaction, Transaction } from "@/api/transaction";

interface TransactionState {
  all: Transaction[];
  loading: boolean;
  error: string | null;
}

const initialState: TransactionState = {
  all: [],
  loading: false,
  error: null,
};

export const getTransaction = createAsyncThunk(
  "transactions/getTransaction",
  async (month: string, thunkAPI) => {
    try {
      const res = await fetchTransaction(month);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || "서버가 아직 많이 아파요");
    }
  }
);

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getTransaction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTransaction.fulfilled, (state, action) => {
        state.loading = false;
        state.all = action.payload;
      })
      .addCase(getTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default transactionSlice.reducer;