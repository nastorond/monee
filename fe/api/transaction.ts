import axiosAuthApi from "./axiosInstance";

export interface Transaction {
  date: string;
  description: string;
  amount: number;
  category: string;
}

export const insertTransaction = async (data: Transaction) => {
  const res = await axiosAuthApi.post("/history/insertDetail", data);
  return res.data;
};

export const fetchTransaction = async (month: string): Promise<Transaction[]> => {
  const res = await axiosAuthApi.get(`/history/getDetail?date=${month}`);
  return res.data;
};