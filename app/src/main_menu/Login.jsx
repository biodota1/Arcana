import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <form
      className="h-full bg-red-500 flex flex-col items-center justify-center gap-4"
      onSubmit={() => navigate("/ongame")}
    >
      <h1 className="text-5xl font-bold text-white my-5">Login</h1>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-black text-2xl font-bold">
            Username
          </span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-slate-100 text-black font-bold text-2xl"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-black text-2xl font-bold">
            Password
          </span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-slate-100 text-black font-bold text-2xl"
        />
      </label>
      <button className="btn w-[330px] h-[80px] m-6 text-2xl text-white font-bold">
        Login
      </button>
    </form>
  );
}
