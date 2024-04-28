import React from "react";

export default function UserChatUI() {
  return (
    <div className="h-[200px] w-[300px] absolute bottom-5 left-2 bg-slate-800 rounded-md">
      <div>
        <button className="btn">All</button>
        <button className="btn">Team</button>
        <button className="btn">Friend</button>
        <button className="btn">Group</button>
      </div>
      <div className="h-[100px] overflow-y-scroll"></div>
      <div className="flex">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn">Send</button>
      </div>
    </div>
  );
}
