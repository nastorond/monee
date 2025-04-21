"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";

import { useEffect, useState } from "react";

import Month from "@/components/Month/Month";
import Details from "./Details";
import VariableExpenses from "./VariableExpenses";
import Total from "./Total";

interface Data1 {
  date: number;
  description: string;
  amount: number;
}

interface Data2 {
  date: number;
  description: string;
  amount: number;
  category: string;
}

export default function Ledger() {
  const dispatch = useDispatch();
  const year = useSelector((state: RootState) => state.calendar.year);
  const month = useSelector((state: RootState) => state.calendar.month);

  const [incomeData, setIncomeData] = useState<Data1[]>([]);
  const [savingsData, setSavingsData] = useState<Data1[]>([]);
  const [fixedExpensesData, setFixedExpensesData] = useState<Data1[]>([]);
  const [variableExpensesData, setVariableExpensesData] = useState<Data2[]>([]);

  useEffect(() => {
    const tempIncomeData: Data1[] = [
      { date: 1, description: "월급", amount: 2500000 },
      { date: 20, description: "프리랜서 외주", amount: 600000 },
      { date: 25, description: "용돈", amount: 100000 },
    ];
    setIncomeData(tempIncomeData);
    
    const tempSavingsData: Data1[] = [
      { date: 2, description: "예금 이체", amount: 300000 },
      { date: 5, description: "청약저축", amount: 100000 },
      { date: 15, description: "펀드 투자", amount: 200000 },
    ];
    setSavingsData(tempSavingsData);
    
    const tempFixedExpensesData: Data1[] = [
      { date: 1, description: "넷플릭스", amount: 14500 },
      { date: 1, description: "휴대폰 요금", amount: 45000 },
      { date: 10, description: "보험료", amount: 120000 },
      { date: 15, description: "인터넷 요금", amount: 30000 },
    ];
    setFixedExpensesData(tempFixedExpensesData);
    
    const tempVariableExpensesData: Data2[] = [
      { date: 1, description: "아침 샌드위치", amount: 5200, category: "식비" },
      { date: 2, description: "편의점 간식", amount: 4500, category: "식비" },
      { date: 3, description: "카페", amount: 4800, category: "식비" },
      { date: 4, description: "점심 - 분식집", amount: 7000, category: "식비" },
      { date: 5, description: "배달 - 치킨", amount: 21000, category: "식비" },
      { date: 6, description: "편의점", amount: 9800, category: "식비" },
      { date: 7, description: "지하철 교통비", amount: 1350, category: "교통" },
      { date: 8, description: "점심 - 김밥천국", amount: 6500, category: "식비" },
      { date: 9, description: "카페 - 아메리카노", amount: 4500, category: "식비" },
      { date: 10, description: "마트 - 간편식", amount: 23000, category: "식비" },
      { date: 11, description: "편의점 도시락", amount: 4700, category: "식비" },
      { date: 12, description: "병원 진료", amount: 30000, category: "건강" },
      { date: 13, description: "약국", amount: 8500, category: "건강" },
      { date: 14, description: "영화관", amount: 13000, category: "문화" },
      { date: 15, description: "배달 - 족발", amount: 28000, category: "식비" },
      { date: 16, description: "카페 - 디카페인", amount: 5200, category: "식비" },
      { date: 17, description: "택시", amount: 12000, category: "교통" },
      { date: 18, description: "술자리", amount: 42000, category: "유흥" },
      { date: 19, description: "간식 - 붕어빵", amount: 2000, category: "식비" },
      { date: 20, description: "문구류 구매", amount: 5600, category: "기타" },
      { date: 21, description: "책 구매", amount: 18000, category: "교육" },
      { date: 22, description: "배달음식", amount: 25000, category: "식비" },
      { date: 23, description: "의류 쇼핑", amount: 48000, category: "쇼핑" },
      { date: 24, description: "과일 구매", amount: 8700, category: "식비" },
      { date: 25, description: "마트 장보기", amount: 78000, category: "식비" },
      { date: 26, description: "카페 - 디저트", amount: 9600, category: "식비" },
      { date: 27, description: "카페", amount: 5200, category: "식비" },
      { date: 28, description: "편의점", amount: 5200, category: "식비" },
      { date: 29, description: "배달 - 피자", amount: 23000, category: "식비" },
      { date: 30, description: "미용실", amount: 40000, category: "미용" },
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
    <div className="m-5 p-4 flex flex-col gap-2 justify-center border rounded-xl shadow-lg">
      <div className="w-[500px] mx-auto">
        <Month />
      </div>
      {/* flex 2 -> 수입, 저축, 고정 지출 / 변동 지출*/}
      <div className="flex flex-col xl:flex-row gap-8 justify-center">

        <div  className="xl:w-[48%]">
          {/* flex 1 -> 수입, 저축 / 고정 지출 */}
          <div className="w-full flex flex-row gap-8 flew-1 justify-center">
            <div className="w-[50%]">
              <div>
                <h2 className="mb-1 mr-6 text-lg font-bold text-center">수입</h2>
                <Details type="incomes" size={275} data={incomeData} setData={setIncomeData} />
              </div>

              <div>
                <h2 className="mt-3 mb-1 mr-6 text-lg font-bold text-center">저축</h2>
                <Details type="savings" size={330} data={savingsData} setData={setSavingsData} />
              </div>
            </div>

            <div className="w-[50%]">
              <h2 className="mb-1 mr-6 text-lg font-bold text-center">고정 지출</h2>
              <Details type="fixedExpenses" size={715} data={fixedExpensesData} setData={setFixedExpensesData} />
            </div>
          </div>
        </div>


        <div className="xl:w-[52%]">
          {/* 변동 지출 */}
          <div className="flew-1">
            <h2 className="mb-1 text-lg font-bold text-center">변동 지출</h2>
            <VariableExpenses type="variableExpenses" size={610} data={variableExpensesData} setData={setVariableExpensesData} />
          </div>
          {/* 결산 */}
          <div className="mt-6 flew-1">
              <h2 className="mb-1 text-lg font-bold text-center"></h2>
              <Total />
          </div>
        </div>

      </div>
    </div>
  );
}
