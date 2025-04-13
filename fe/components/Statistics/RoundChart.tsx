import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Props {
  data: { category: string; amount: number }[];
  type: "수입" | "지출";
}

const RoundChart = ({ data, type }: Props) => {
  const colors = type === "수입"
    ? ["#2563D9", "#60a5fa", "#93c5fd"]
    : ["#E7414C", "#f87171", "#fca5a5"];

  const options: ApexOptions = {
    labels: data.map((d) => d.category),
    colors,
    legend: { position: "bottom" },
    dataLabels: { enabled: true },
  };

  const series = data.map((d) => d.amount);

  return (
    <Chart type="donut" width="100%" height="100%" options={options} series={series} />
  );
};

export default RoundChart;