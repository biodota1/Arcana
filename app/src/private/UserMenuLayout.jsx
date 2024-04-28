import React from "react";
import UserInfoUI from "./UserInfoUI";
import UserMenu from "./UserMenu";
import UserChatUI from "./UserChatUI";
import UserModeUI from "./UserModeUI";
import userBg from "../assets/user-bg.png";
import UserSettingsUI from "./UserSettingsUI";
import UserCharacter from "./UserCharacter";

export default function UserMenuLayout() {
  return (
    <div
      className="h-full w-full bg-red-500 relative bg-cover bg-center"
      style={{
        backgroundImage: `url("${userBg}")`,
      }}
    >
      <UserInfoUI />
      <UserCharacter />
      <UserMenu />
      <UserChatUI />
      <UserModeUI />
      <UserSettingsUI />
    </div>
  );
}
