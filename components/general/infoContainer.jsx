import React from "react";

export default function InfoContainer ({ title, children }) {
  return (
    <div className="border-t mb-6">
      <div className="bg-slate-200 md:px-10 px-3 text-black w-full rounded-b-md translate-y-1">
        <h2 className="h2 py-2 ">{title}</h2>
      </div>
      <div
        className={
          "h-full py-4 p overflow-y-hidden text-grayfishblue bg-slate-100 transition-all ease-in-out duration-200 md:px-10 px-1"
        }
      >
        {children}
      </div>
    </div>
  );
}
