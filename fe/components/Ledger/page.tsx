"use client";

import { useEffect, useState } from "react";
import Details from "./Details";
import VariableExpenses from "./VariableExpenses";
import Total from "./Total";

interface Data {
  date: number;
  description: string;
  amount: number;
}

export default function Ledger() {
  const [incomeData, setIncomeData] = useState<Data[]>([]);
  const [savingsData, setSavingsData] = useState<Data[]>([]);
  const [fixedExpensesData, setFixedExpensesData] = useState<Data[]>([]);
  const [variableExpensesData, setVariableExpensesData] = useState<Data[]>([]);

  useEffect(() => {
    const tempIncomeData: Data[] = [
      { date: 1, description: "월급", amount: 2000000 },
      { date: 5, description: "보너스", amount: 500000 },
      { date: 1, description: "월급", amount: 2000000 },
      { date: 5, description: "보너스", amount: 500000 },      
    ];
    setIncomeData(tempIncomeData);

    const tempSavingsData: Data[] = [
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

    const tempFixedExpensesData: Data[] = [
      { date: 1, description: "유튜브", amount: 20000 },
      { date: 5, description: "넷플릭스", amount: 550000 },
      { date: 15, description: "디즈니 플러스", amount: 500000 },
      { date: 15, description: "보험1", amount: 2000000 },
      { date: 16, description: "보험2", amount: 20000 },
    ];
    setFixedExpensesData(tempFixedExpensesData);

    const tempVariableExpensesData: Data[] = [
      { date: 1, description: "수건 5장", amount: 20000 },
      { date: 5, description: "병원", amount: 550000 },
      { date: 15, description: "약국", amount: 500000 },
      { date: 12, description: "자전거 구매", amount: 2000000 },
      { date: 13, description: "떡볶이세트", amount: 20000 },
      { date: 15, description: "약국", amount: 5000 },
      { date: 15, description: "붕어빵", amount: 2000 },
      { date: 16, description: "책 구매", amount: 15000 },
      { date: 1, description: "수건 5장", amount: 20000 },
      { date: 5, description: "병원", amount: 550000 },
      { date: 15, description: "약국", amount: 500000 },
      { date: 12, description: "자전거 구매", amount: 2000000 },
      { date: 13, description: "떡볶이세트", amount: 20000 },
      { date: 15, description: "약국", amount: 5000 },
      { date: 15, description: "붕어빵", amount: 2000 },
      { date: 16, description: "책 구매", amount: 15000 },
      { date: 1, description: "수건 5장", amount: 20000 },
      { date: 5, description: "병원", amount: 550000 },
      { date: 15, description: "약국", amount: 500000 },
      { date: 12, description: "자전거 구매", amount: 2000000 },
      { date: 13, description: "떡볶이세트", amount: 20000 },
      { date: 15, description: "약국", amount: 5000 },
      { date: 15, description: "붕어빵", amount: 2000 },
      { date: 16, description: "책 구매1", amount: 15000 },
      { date: 16, description: "책 구매2", amount: 15000 },
      { date: 15, description: "붕어빵", amount: 2000 },
      { date: 16, description: "책 구매1", amount: 15000 },
      { date: 16, description: "책 구매23", amount: 15000 },
    ];
    setVariableExpensesData(tempVariableExpensesData);
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
      <div className="flex flex-row gap-10 mt-5 justify-center">

        <div className="flex flex-col gap-5 flew-1">
          <div className="flex flex-row gap-10 flew-1">
            <div className="flex flex-col gap-5 flew-1">
              {/* 수입 */}
              <div>
                <h2 className="mb-1 mr-6 text-lg font-bold text-center">수입</h2>
                <Details type="incomes" size={116} data={incomeData} setData={setIncomeData} />
              </div>

              {/* 저축 */}
              <div>
                <h2 className="mb-1 mr-6 text-lg font-bold text-center">저축</h2>
                <Details type="savings" size={203} data={savingsData} setData={setSavingsData} />
              </div>
            </div>


            {/* 고정 지출 */}
            <div className="flew-1">
              <h2 className="mb-1 mr-6 text-lg font-bold text-center">고정 지출</h2>
              <Details type="fixedExpenses" size={440} data={fixedExpensesData} setData={setFixedExpensesData} />
            </div>
          </div>
          
          {/* 결산 */}
          <div className="flew-1">
            <h2 className="mb-1 text-lg font-bold text-center">결산</h2>
            <Total />
          </div>
        </div>

        {/* 변동 지출 */}
        <div className="flew-1">
          <h2 className="mb-1 text-lg font-bold text-center">변동 지출</h2>
          <VariableExpenses type="variableExpenses" size={754} data={variableExpensesData} setData={setVariableExpensesData} />
        </div>
      </div>
    </div>
  );
}
