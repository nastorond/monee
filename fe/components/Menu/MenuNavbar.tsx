"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link } from "@heroui/link";
import Image from "next/image";
import LogoImg from "@/public/logo/figgy_nukki.png";
import "./MenuNavbar.css";

interface MenuNavbarProps {
  selectedMenu: string;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
}

const MenuNavbar: React.FC<MenuNavbarProps> = ({ selectedMenu, setSelectedMenu }) => {
  return (
    <Navbar position="sticky" className="menu-navbar flex justify-between items-center w-full px-6 py-2">

      <NavbarContent className="md:flex sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 justify-between w-full max-w-2xl">
        <NavbarBrand className="flex items-center gap-2">
          <Image src={LogoImg} alt="LogoImg" width={25} height={25} className="padding-10 wiggling" />
        </NavbarBrand>
        <NavbarItem className="min-w-[80px] text-center">
          <Link
            className={`menu-link ${selectedMenu === "calendar" ? "active" : ""}`}
            onPress={() => setSelectedMenu("calendar")}
          >
            📅 캘린더
          </Link>
        </NavbarItem>
        <NavbarItem className="min-w-[80px] text-center">
          <Link
            className={`menu-link ${selectedMenu === "ledger" ? "active" : ""}`}
            onPress={() => setSelectedMenu("ledger")}
          >
            💰 가계부
          </Link>
        </NavbarItem>
        <NavbarItem className="min-w-[80px] text-center">
          <Link
            className={`menu-link ${selectedMenu === "statistics" ? "active" : ""}`}
            onPress={() => setSelectedMenu("statistics")}
          >
            📊 통계
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default MenuNavbar;
