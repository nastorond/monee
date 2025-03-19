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
  const [savingsData, setSavingsData] = useState<IncomeData[]>([]);
  const [fixedExpensesData, setFixedExpensesData] = useState<IncomeData[]>([]);

  useEffect(() => {
    const tempIncomeData: IncomeData[] = [
      { date: 1, description: "월급", amount: 2000000 },
      { date: 5, description: "보너스", amount: 500000 },
      { date: 1, description: "월급", amount: 2000000 },
      { date: 5, description: "보너스", amount: 500000 },      
    ];
    setIncomeData(tempIncomeData);

    const tempSavingsData: IncomeData[] = [
      { date: 1, description: "예금", amount: 20000 },
      { date: 5, description: "적금", amount: 550000 },
      { date: 15, description: "주식", amount: 500000 },
      { date: 15, description: "청약", amount: 2000000 },
      { date: 1, description: "예금", amount: 20000 },
      { date: 5, description: "적금", amount: 550000 },
      { date: 15, description: "주식", amount: 500000 },
      { date: 15, description: "청약", amount: 2000000 },
    ];
    setSavingsData(tempSavingsData);


    const tempFixedExpensesData: IncomeData[] = [
      { date: 1, description: "유튜브", amount: 20000 },
      { date: 5, description: "넷플릭스", amount: 550000 },
      { date: 15, description: "디즈니 플러스", amount: 500000 },
      { date: 15, description: "보험1", amount: 2000000 },
      { date: 16, description: "보험2", amount: 20000 },
    ];
    setFixedExpensesData(tempFixedExpensesData);
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
      <div className="flex flex-row justify-between gap-5 mt-3">
        {/* 1단 */}
        <div className="flex flex-col justify-between gap-10">
          {/* 수입 */}
          <div>
            <h2 className="mb-1 text-lg font-bold text-center">수입</h2>
            <Income size={115} data={incomeData} setData={setIncomeData} />
          </div>

          {/* 저축 */}
          <div>
            <h2 className="mb-1 text-lg font-bold text-center">저축</h2>
            <Income size={205} data={savingsData} setData={setSavingsData} />
          </div>
        </div>

        {/* 2단 */}
        {/* 고정 지출 */}
        <div>
          <h2 className="mb-1 text-lg font-bold text-center">고정 지출</h2>
          <Income size={465} data={fixedExpensesData} setData={setFixedExpensesData} />
        </div>

        {/* 3단 */}
        {/* 변동 지출 */}
      </div>
    </div>
  );
}
