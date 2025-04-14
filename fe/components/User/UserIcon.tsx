"use client";

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@heroui/react";

const UserIcon = () => {
  return (
    <div className="absolute top-5 right-6 z-50 lg:right-8">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="w-10 h-10 transition-transform"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="faded">
          <DropdownItem key="profile" href="/" className="h-14 gap-2">
            <p className="font-semibold">you@example.com</p>
          </DropdownItem>
          <DropdownItem key="settings" href="/" className="text-black-500 hover:bg-gray-100">
          설정
          </DropdownItem>
          <DropdownItem key="analytics" href="/" className="text-black-500 hover:bg-gray-100">
          통계
          </DropdownItem>
          <DropdownItem key="logout" href="/" className="text-red-500 hover:bg-red-100">
            로그아웃
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default UserIcon;