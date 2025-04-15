interface Props {
  type: "수입" | "지출";
  onTypeChange: (t: "수입" | "지출") => void;
  chartType: "donut" | "line";
  onChartTypeChange: (t: "donut" | "line") => void;
}

const StatisticsFilterBar = ({ type, onTypeChange, chartType, onChartTypeChange }: Props) => {
  return (
    <div className="flex items-center justify-between w-full max-w-5xl mt-10">
      {/* 원형, 꺾은선 그래프 버튼 */}
      <div className="flex gap-2">
        <button
          onClick={() => onChartTypeChange("donut")}
          className={`px-3 py-1 rounded-full text-lg ${
            chartType === "donut" ? "bg-gray-800 text-white" : "bg-gray-200"
          }`}
        >
          ●
        </button>
        <button
          onClick={() => onChartTypeChange("line")}
          className={`px-3 py-1 rounded-full text-lg ${
            chartType === "line" ? "bg-gray-800 text-white" : "bg-gray-200"
          }`}
        >
          /
        </button>
      </div>

      {/* 수입, 지출 버튼 */}
      <div className="flex gap-2">
        {(["수입", "지출"] as const).map((t) => (
          <button
            key={t}
            onClick={() => onTypeChange(t)}
            className={`px-4 py-2 rounded-md font-medium ${
              type === t
                ? t === "수입"
                  ? "bg-blue-500 text-white"
                  : "bg-red-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      
    </div>
  );
};

export default StatisticsFilterBar;