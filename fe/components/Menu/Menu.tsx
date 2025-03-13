"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/logo/logo_nukki.png";
import LogoImg from "@/public/logo/figgy_nukki.png";
import "./style.css";

interface MenuProps {
  selectedMenu: string;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
}

const Menu: React.FC<MenuProps> = ({ selectedMenu, setSelectedMenu }) => {
  const [isBouncing, setIsBouncing] = useState(false);

  const LogoClick = () => {
    setIsBouncing(true);
    
    setTimeout(() => {
      setIsBouncing(false);
    }, 500);
  };

  return (
    <nav className="menu-container">
      <div className="menu-header">
        <Image src={LogoImg} alt="LogoImg" width={30} height={30} className="wiggling" />
        <Image src={Logo} alt="Logo" width={130} height={30} 
        className={`bouncing-logo ${isBouncing ? "bouncing" : ""}`}
        onClick={LogoClick}
        />
      </div>
      <ul className="menu-list">
        {[
          { key: "calendar", label: "📅 캘린더" },
          { key: "ledger", label: "💰 가계부" },
          { key: "statistics", label: "📊 통계" },
        ].map(({ key, label }) => (
          <li
            key={key}
            className={`menu-item ${selectedMenu === key ? "active" : ""}`}
            onClick={() => setSelectedMenu(key)}
          >
            {label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
