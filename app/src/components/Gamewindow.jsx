import React from "react";
import { Outlet } from "react-router-dom";
import gameBG from "../assets/magic_bg.png";

export default function Gamewindow() {
  return (
    <div
      className="h-[720px] w-[1020px]"
      style={{
        backgroundImage: `url("${gameBG}")`,
        backgroundSize: "contain",
      }}
    >
      <Outlet />
    </div>
  );
}
