import React from "react";

export default function UserMenu() {
  return (
    <div className="absolute right-0 flex flex-col gap-4 m-[50px] mt-[150px]">
      <button className="btn h-[110px] w-[220px] text-3xl font-bold">
        Armory
      </button>
      <button className="btn h-[110px] w-[220px] text-3xl font-bold">
        Spell
      </button>
      <button className="btn h-[110px] w-[220px] text-3xl font-bold">
        Shop
      </button>
    </div>
  );
}
