"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link } from "@heroui/link";
import Image from "next/image";
import LogoImg from "@/public/logo/figgy_nukki.png";

interface MenuNavbarProps {
  selectedMenu: string;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
}

const MenuNavbar: React.FC<MenuNavbarProps> = ({ selectedMenu, setSelectedMenu }) => {
  return (
    <Navbar position="sticky" className="menu-navbar flex justify-between items-center w-full px-6 py-2 bg-[#f9f5ea] shadow-md">
      <NavbarContent className="flex justify-between w-full max-w-2xl mx-auto gap-4 md:gap-6 lg:gap-8">
        <NavbarBrand className="flex items-center gap-2">
          <Image src={LogoImg} alt="LogoImg" width={25} height={25} className="wiggling" />
        </NavbarBrand>
        {["calendar", "ledger", "statistics"].map((key) => (
          <NavbarItem key={key} className="min-w-[80px] text-center">
            <Link
              className={`p-2 font-bold cursor-pointer transition-colors ${
                selectedMenu === key ? "text-[#2563D9]" : "text-gray-800 hover:text-[#2563D9]"
              }`}
              onPress={() => setSelectedMenu(key)}
            >
              {key === "calendar" ? "📅 캘린더" : key === "ledger" ? "💰 가계부" : "📊 통계"}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};

export default MenuNavbar;
