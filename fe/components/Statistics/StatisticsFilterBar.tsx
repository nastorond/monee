import MonthPicker from "../Month/MonthPicker";

interface Props {
  type: "수입" | "지출";
  onTypeChange: (t: "수입" | "지출") => void;
}

const StatisticsFilterBar = ({ type, onTypeChange }: Props) => {
  return (
    <div className="flex flex-end gap-4 items-center justify-center w-full max-w-5xl mt-10">
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