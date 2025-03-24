"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/logo/logo_nukki.png";
import LogoImg from "@/public/logo/figgy_nukki.png";
import MenuNavbar from "./MenuNavbar";

interface MenuProps {
  selectedMenu: string;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
}

const Menu: React.FC<MenuProps> = ({ selectedMenu, setSelectedMenu }) => {
  const [isBouncing, setIsBouncing] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const LogoClick = () => {
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 500);
  };

  return (
    <>
      {isSmallScreen ? (
        <MenuNavbar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      ) : (
        <nav className="w-[240px] h-screen bg-[#f9f5ea] p-4 shadow-lg flex flex-col">
          <div className="flex items-center mb-8 p-3 gap-3 cursor-pointer transition-transform duration-300">
            <Image src={LogoImg} alt="LogoImg" width={30} height={30} className="wiggling" />
            <Image
              src={Logo}
              alt="Logo"
              width={130}
              height={30}
              className={`bouncing-logo ${isBouncing ? "bouncing" : ""}`}
              onClick={LogoClick}
            />
          </div>
          <ul className="flex flex-col gap-4">
            {[
              { key: "calendar", label: "📅 캘린더" },
              { key: "ledger", label: "💰 가계부" },
              { key: "statistics", label: "📊 통계" },
            ].map(({ key, label }) => (
              <li
                key={key}
                className={`p-3 rounded-lg cursor-pointer transition-transform transform ${
                  selectedMenu === key
                    ? "bg-[#f8e08e] font-bold"
                    : "hover:bg-[#f8e08e]/70 active:scale-90"
                }`}
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
