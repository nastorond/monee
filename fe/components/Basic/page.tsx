"use client";

import { useState } from "react";
import Menu from "@/components/Menu/Menu";
import Calendar from "@/components/Calendar/Calendar";
import Ledger from "@/components/Ledger/Ledger";
import Statistics from "@/components/Statistics/Statistics";
import "./style.css";
import UserIcon from "../../components/User/UserIcon";

export default function Basic() {
  // 선택된 메뉴
  const [selectedMenu, setSelectedMenu] = useState<string>("calendar");

  // 선택된 메뉴에 맞는 컴포넌트 렌더링
  const renderComponent = () => {
    switch (selectedMenu) {
      case "ledger":
        return <Ledger />;
      case "statistics":
        return <Statistics />;
      default:
        return <Calendar />;
    }
  };

  return (
    <div className="basic-layout">
      <UserIcon />
      {/* 선택된 메뉴(props로 선택된 메뉴 인자값 주기) */}
      <Menu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />

      <div className="main-container">
        {/* 선택된 메뉴 컴포넌트 렌더링 */}
        {renderComponent()}
      </div>
    </div>
  );
}
