"use client";

import { useEffect, useState } from "react";
import Income from "./Income";

interface IncomeData {
  date: number;
  description: string;
  amount: number;
}

export default function Ledger() {
  const [incomeData, setIncomeData] = useState<IncomeData[]>([]);
  
  useEffect(() => {
    const tempIncomeData: IncomeData[] = [
      { date: 1, description: "월급", amount: 2000000 },
      { date: 5, description: "보너스", amount: 500000 },

    ];
    setIncomeData(tempIncomeData);
  }, []);
  // useEffect(() => {
  //   // API 호출을 가정한 비동기 함수
  //   const fetchIncomeData = async () => {
  //     try {
  //       const response = await fetch("/history/getDetail?date=”2025-02”"); // 실제 API 엔드포인트로 변경 필요
  //       const data: IncomeData[] = await response.json();
  //       setIncomeData(data);
  //     } catch (error) {
  //       console.error("Error fetching income data:", error);
  //     }
  //   };

  return (
    <div>
      Ledger Page
      <Income data={incomeData} setData={setIncomeData} />
    </div>
  );
}
