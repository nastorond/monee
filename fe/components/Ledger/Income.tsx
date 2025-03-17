import React from "react";

interface IncomeProps {
  amount?: number;
  source?: string;
}

const Income: React.FC<IncomeProps> = ({ amount = 0, source = "Unknown" }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Income</h2>
      <p className="text-gray-700">Source: {source}</p>
      <p className="text-gray-700">Amount: ${amount.toLocaleString()}</p>
    </div>
  );
};

export default Income;
