"use client";

import React, { useEffect, useRef } from "react";
import "./Detail.css";

interface Transaction {
  date: string;
  type: "수입" | "지출";
  description: string;
  amount: number;
}

interface DetailProps {
  transactions: Transaction[];
  selectedDate: string | null;
}

const Detail: React.FC<DetailProps> = ({ transactions, selectedDate }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dateRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (selectedDate && dateRefs.current[selectedDate] && containerRef.current) {
      containerRef.current.scrollTo({
        top: dateRefs.current[selectedDate]!.offsetTop - 50,
        behavior: "smooth",
      });
    }
  }, [selectedDate]);

  const groupTransactions = transactions.reduce((acc, item) => {
    if (!acc[item.date]) acc[item.date] = [];
    acc[item.date].push(item);
    return acc;
  }, {} as Record<string, Transaction[]>);

  return (
    <div ref={containerRef} className="detail-container bg-white shadow-lg rounded-lg p-4 w-96 h-screen overflow-y-auto">
      <h3 className="text-lg font-bold mb-4">
        📜 {selectedDate ? `${selectedDate.split("-")[0]}년 ${selectedDate.split("-")[1]}월 전체 내역` : "거래 내역"}
      </h3>

      <ul className="space-y-4">
        {Object.keys(groupTransactions).length > 0 ? (
          Object.entries(groupTransactions).map(([date, items]) => (
            <li key={date}>
              <div
                ref={(el) => {
                  if (el) dateRefs.current[date] = el;
                }}
                className={`transaction-date-header ${selectedDate === date ? "selected-date" : ""}`}
              >
                {date}
              </div>

              {items.map((item, index) => (
                <div
                  key={index}
                  className={`transaction-item p-3 rounded-md text-sm flex justify-between transition-all duration-300
                    ${item.type === "수입" ? "income" : "expense"} 
                    ${selectedDate === item.date ? "selected" : ""}`}
                >
                  <span className="font-semibold">{item.description}</span>
                  <span>{item.amount.toLocaleString()}원</span>
                </div>
              ))}
            </li>
          ))
        ) : (
          <p className="text-gray-500">내역이 없습니다.</p>
        )}
      </ul>
    </div>
  );
};

export default Detail;
