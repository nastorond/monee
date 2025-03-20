"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/logo/logo_nukki.png";
import LogoImg from "@/public/logo/figgy_nukki.png";
import "./Menu.css";
import MenuNavbar from "./MenuNavbar";

interface MenuProps {
  selectedMenu: string;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
}

const Menu: React.FC<MenuProps> = ({ selectedMenu, setSelectedMenu }) => {
  const [isBouncing, setIsBouncing] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // 특정 사이즈 이하일 때 네비게이션 바로 변경
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024); // 1024px 이하일 때 적용
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const LogoClick = () => {
    setIsBouncing(true);
    setTimeout(() => {
      setIsBouncing(false);
    }, 500);
  };

  return (
    <>
      {/* 🟢 화면이 작아지면 네비게이션 바 표시 */}
      {isSmallScreen ? (
        <MenuNavbar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      ) : (
        /* 🟢 기존 사이드 메뉴 유지 */
        <nav className="menu-container">
          <div className="menu-header">
            <Image src={LogoImg} alt="LogoImg" width={30} height={30} className="wiggling" />
            <Image src={Logo} alt="Logo" width={130} height={30} className={`bouncing-logo ${isBouncing ? "bouncing" : ""}`} onClick={LogoClick}/>
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
      )}
    </>
  );
};

export default Menu;
