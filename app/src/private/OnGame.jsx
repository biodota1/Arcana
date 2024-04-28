import React from "react";
import { Outlet } from "react-router-dom";

export default function OnGame() {
  return (
    <div className="h-full bg-red-500 flex flex-col items-center justify-center gap-4">
      <Outlet />
    </div>
  );
}
