import React from "react";
import { useNavigate } from "react-router-dom";

export default function MainMenu() {
  const navigate = useNavigate();

  return (
    <div className="h-full bg-red-500 flex flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold text-white my-5">MAIN MENU</h1>
      <button
        className="btn h-[85px] w-[300px] text-2xl font-bold text-white"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
      <button className="btn h-[85px] w-[300px] text-2xl font-bold text-white">
        Register
      </button>
      <button
        className="btn h-[85px] w-[300px] text-2xl font-bold text-white"
        onClick={() => navigate("/options")}
      >
        Options
      </button>
      <button className="btn h-[85px] w-[300px] text-2xl font-bold text-white">
        About
      </button>
    </div>
  );
}
