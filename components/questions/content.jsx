import React from "react";
import { FaArrowDown } from "react-icons/fa";

const banner = ({ toggle, faq: {question, open, answer}, index}) => {
  return (
    <div onClick={() => toggle(index)} className="cursor-pointer border-t group w-full">
    <div className="flex items-center gap-2 justify-between bg-slate-200 md:px-10 px-4 text-black group-hover:text-primary w-full">
    <h1 className="font-medium my-4 text-sm  md:text-xl transition-all ease-in-out ">{question}</h1>
    <FaArrowDown className={(open ? "rotate-180" : "rotate-0") + " transition-all ease-in-out duration-300 min-w-[30px]"} />
    </div>
      <p className={(open ? "h-full py-4" : "h-0") + " p overflow-y-hidden text-grayfishblue bg-slate-100 transition-all ease-in-out duration-200 md:px-10 px-4"}>{answer}</p>
    </div>
  );
};



export default banner;

