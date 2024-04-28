import React from "react";
import { useNavigate } from "react-router-dom";

export default function Options() {
  const navigate = useNavigate();
  return (
    <div className="h-full bg-red-500 flex flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold text-white my-5">OPTIONS</h1>
      <div className="flex gap-10">
        <p className="text-2xl font-bold text-white">Sound</p>
        <input type="range" min={0} max="100" value="100" className="range" />
      </div>
      <div className="flex gap-10">
        <p className="text-2xl font-bold text-white">Music</p>
        <input type="range" min={0} max="100" value="100" className="range" />
      </div>
      <div className="flex">
        <p className="text-2xl font-bold text-white pr-6">Graphic</p>
        <input type="range" min={0} max="100" value="100" className="range" />
      </div>
      <button
        className="btn h-[65px] w-[100px] text-2xl text-white"
        onClick={() => navigate("/")}
      >
        OK
      </button>
    </div>
  );
}
