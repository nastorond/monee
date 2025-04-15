import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import {
  getYearlyData,
  getMonthlyData,
  getWeeklyData,
} from "@/components/utils/statisticsUtils";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Transaction {
  date: string;
  description: string;
  amount: number;
  type: "수입" | "지출";
}

interface Props {
  data: Transaction[];
  type: "수입" | "지출";
}

type ViewType = "주간" | "월간" | "연간";

const LineChart = ({ data, type }: Props) => {
  const [viewType, setViewType] = useState<ViewType>("주간");

  const chartData = useMemo(() => {
    if (viewType === "연간") return getYearlyData(data);
    if (viewType === "월간") return getMonthlyData(data);
    return getWeeklyData(data); // 기본은 주간
  }, [viewType, data]);

  const options: ApexOptions = {
    chart: { type: "line", height: 350 },
    xaxis: {
      categories: chartData.map((d) => d.label),
      labels: { rotate: -45, style: { fontSize: "12px" } },
    },
    yaxis: {
      min: 0,
      forceNiceScale: true,
    },
    stroke: { curve: "smooth" },
    colors: [type === "수입" ? "#2563D9" : "#E7414C"],
    dataLabels: { enabled: true },
    tooltip: { enabled: true },
  };

  const series = [
    {
      name: `${type} 추이`,
      data: chartData.map((d) => d.value),
    },
  ];

  return (
    <div className="w-full">
      <Chart type="line" height={350} options={options} series={series} />

      <div className="flex justify-center gap-4 mt-4">
        {(["주간", "월간", "연간"] as const).map((v) => (
          <button
            key={v}
            onClick={() => setViewType(v)}
            className={`px-4 py-1 rounded-md font-medium ${
              viewType === v ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LineChart;