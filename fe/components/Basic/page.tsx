import Menu from "@/components/Menu";
import Calendar from "@/components/Calendar/page";
import Ledger from "@/components/Ledger/page";
import Statistics from "@/components/Statistics/page";

export default function Basic() {
  return (
    <div>
      <Menu />
      {/* 캘린더 선택 */}
      <Calendar />
      {/* 가계부 선택 */}
      <Ledger />
      {/* 통계 선택 */}
      <Statistics />
    </div>
  );
}
