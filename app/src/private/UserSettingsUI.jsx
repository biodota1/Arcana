import React from "react";
import settingUI from "../assets/setting.png";

export default function UserSettingsUI() {
  return (
    <div className="absolute top-2 right-2">
      <img className="h-[30px]" src={settingUI} alt="" />
    </div>
  );
}
