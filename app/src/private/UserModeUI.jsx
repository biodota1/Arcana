import React from "react";

export default function UserModeUI() {
  return (
    <div className="absolute bottom-[10%] left-[38%]">
      <p className="text-2xl text-white font-bold text-center my-3">
        MODE: FFA
      </p>
      <div>
        <button className="btn h-[100px] w-[50px] text-white text-3xl font-bold">
          {"<"}
        </button>
        <button className="btn h-[100px] w-[200px] text-white text-3xl font-bold">
          PLAY
        </button>
        <button className="btn h-[100px] w-[50px] text-white text-3xl font-bold">
          {">"}
        </button>
      </div>
    </div>
  );
}
