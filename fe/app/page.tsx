"use client";

import Auth from "@/components/Auth/page";
import Basic from "@/components/Basic/page";
import { useState } from "react";

export default function Home() {
  const [isLogined, setIsLogined] = useState<boolean>(false);

  return (
    <div>
      {!isLogined? (
        <Auth setIsLogined={setIsLogined} />
        ) : (
        <Basic />
      )}
    </div>
  );
}
