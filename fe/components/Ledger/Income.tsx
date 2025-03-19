"use client";
import React, { useState } from "react";

interface IncomeData {
  date: number;
  description: string;
  amount: number;
}

interface IncomeProps {
  data: IncomeData[];
  setData: React.Dispatch<React.SetStateAction<IncomeData[]>>;
}

const Income: React.FC<IncomeProps> = ({ data, setData }) => {
  // 입력값
  const [newIncome, setNewIncome] = useState<IncomeData>({
    date: 0,
    description: "",
    amount: 0,
  });


  // 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewIncome((prev) => ({
      ...prev,
      [name]: name === "date" || name === "amount" ? value.replace(/[^0-9]/g, "") : value
    }));
  };


  // 입력값 변경 핸들러 + Enter 키 감지
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };


  // 데이터 전송
  const handleSubmit = () => {
    // 빈 데이터가 있을 경우
    if (!newIncome.date || !newIncome.description || !newIncome.amount) {
      alert("모든 값을 입력해주세요.");
      return;
    }

    // 오류 - date
    if (Number(newIncome.date) < 1 || Number(newIncome.date)  > 31) {
      alert("날짜는 1부터 31 사이의 숫자여야 합니다.");
      return;
    }

    // 성공 - 데이터 전송 후 초기화
    if (newIncome.date && newIncome.description && newIncome.amount) {
      console.log("전송할 데이터:", newIncome);

      setData((prevData) => [...prevData, { 
        date: Number(newIncome.date), 
        description: newIncome.description, 
        amount: Number(newIncome.amount) 
      }]);

      setNewIncome({ date: 0, description: "", amount: 0 });
    }
  };



  return (
    <div>
      <h2 className="mb-1 pr-5 text-lg font-bold text-center">수  입</h2>

      <div className="m-0 p-0 overflow-hidden rounded-lg border border-[#919191] max-w-[350px]">
        <div className="m-0 p-0 min-h-[200px] max-h-[200px] overflow-y-scroll">
        <table className="w-full border-collapse overflow-hidden rounded-lg">
          <thead className="bg-[#F8E08E] border-b border-[#919191] sticky top-0">
            <tr>
              <th className="px-3 py-1 text-sm font-semibold whitespace-nowrap w-2/9">날 짜</th>
              <th className="px-3 py-1 text-sm font-semibold whitespace-nowrap w-5/9">내 용</th>
              <th className="px-3 py-1 text-sm font-semibold whitespace-nowrap w-2/9">비 용</th>
            </tr>
          </thead>

          <tbody >          
            {data.map((income, index) => (
              <tr key={index} className="hover:bg-[#F9F5EA] transition border-b border-[#919191]">
                <td className=" px-3 py-1 text-sm font-normal text-center whitespace-nowrap">{income.date}일</td>
                <td className=" px-3 py-1 text-sm font-normal text-center whitespace-nowrap">{income.description}</td>
                <td className=" px-3 py-1 text-sm font-normal text-right whitespace-nowrap">{income.amount.toLocaleString()}원</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 🔥 새로운 데이터 입력 필드 + 전송 버튼 */}
      <div className="flex items-center max-w-[350px]">
        <div className="border border-[#919191] rounded-lg p-0 mx-0 my-1 ">
          <input
            type="text"
            name="date"
            value={newIncome.date || ""}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="w-2/10 px-2 py-1 text-sm text-center focus:outline-none"
            placeholder="15"
          />
          <input
            type="text"
            name="description"
            value={newIncome.description}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="w-5/10 px-2 py-1 text-sm text-center border-l border-r border-[#919191] focus:outline-none"
            placeholder="월급"
          />
          <input
            type="text"
            name="amount"
            value={newIncome.amount || ""}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="w-3/10 px-2 py-1 text-sm text-right  focus:outline-none"
            placeholder="2000000"
          />
        </div>
        <button
            onClick={handleSubmit}
            className="ml-1 px-2 py-0 text-white bg-[#F8E08E] border border-[#919191] rounded-lg hover:bg-[#D9D9D9] transition"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Income;
