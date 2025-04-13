interface Props {
  data: { category: string; amount: number }[];
  type: "수입" | "지출";
}

const StatisticsDetail = ({ data, type }: Props) => {
  const total = data.reduce((sum, d) => sum + d.amount, 0);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">{type} 상세 내역</h2>
      <ul className="space-y-2">
        {data.map((item, idx) => (
          <li key={idx} className="flex justify-between border-b pb-2">
          <div>
            <span>{item.category}</span>
            <span className="ml-1 text-gray-400 text-sm">
              {((item.amount / total) * 100).toFixed(1)}%
            </span>
          </div>
          <span className={type === "수입" ? "text-blue-600" : "text-red-500"}>
            {item.amount.toLocaleString()}원
          </span>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default StatisticsDetail;
