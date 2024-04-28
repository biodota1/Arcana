import React from "react";
import userPhoto from "../assets/user-photo.png";

export default function UserInfoUI() {
  return (
    <div className="absolute top-[10px] ">
      <div className="h-[120px] w-[210px] absolute top-0 bg-slate-900 pt-8 pl-2 flex gap-5">
        <div className="avatar">
          <div className="h-[80px] w-[80px] rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div>
          <p className="text-green-500 font-semibold text-lg">Wins: 999</p>
          <p className="text-green-500 font-semibold text-lg">Loses: 999</p>
          <p className="text-amber-300 font-semibold text-lg">Gold: 999</p>
        </div>
      </div>
      <div className="h-[25px] w-[300px] absolute top-0 z-10 bg-amber-400"></div>
      <div className="h-[25px] w-[300px] absolute top-0 z-20 ml-2 text-black font-bold">
        PLAYER NAME
      </div>
    </div>
  );
}
