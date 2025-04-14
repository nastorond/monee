"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useMemo, useState } from "react";
import RoundChart from "./RoundChart";
import StatisticsDetail from "./StatisticsDetail";
import StatisticsFilterBar from "./StatisticsFilterBar";
import { Player } from "@lottiefiles/react-lottie-player";
import Month from "../Month/Month";

const Statistics = () => {
  const transactions = useSelector((state: RootState) => state.transactions.all);
  const year = useSelector((state: RootState) => state.calendar.year);
  const month = useSelector((state: RootState) => state.calendar.month);
  const [type, setType] = useState<"수입" | "지출">("수입");

  const filteredData = useMemo(() => {
    const currentMonth = `${year}-${month.toString().padStart(2, "0")}`;
    const monthly = transactions.filter((t) => t.date.startsWith(currentMonth) && t.type === type);
    const grouped = monthly.reduce((acc: Record<string, number>, item) => {
      acc[item.description] = (acc[item.description] || 0) + item.amount;
      return acc;
    }, {});
    return Object.entries(grouped).map(([category, amount]) => ({ category, amount }));
  }, [transactions, year, month, type]);

  return (
    <div className="flex flex-col items-center p-10 w-full">
      <div className="w-full max-w-3xl relative">
        <Month />
      </div>

      <StatisticsFilterBar type={type} onTypeChange={setType} />
      <div className="flex gap-16 w-full max-w-5xl mt-10">
        {filteredData.length === 0 ? (
          <div className="flex flex-col items-center justify-center w-full text-gray-400 mt-10">
            <Player
              autoplay
              loop
              src="/animations/empty.json"
              style={{ height: "300px", width: "300px" }}
            />
            <p className="text-lg font-semibold mt-4">
              이번 달 {type === "수입" ? "수입" : "지출"} 내역이 없습니다.
            </p>
            <p className="text-sm mt-2">기록을 추가해보세요!</p>
          </div>
        ) : (
          <>
            <div className="w-[400px] h-[400px]">
              <RoundChart data={filteredData} type={type} />
            </div>
            <div className="flex-1">
              <StatisticsDetail data={filteredData} type={type} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Statistics;