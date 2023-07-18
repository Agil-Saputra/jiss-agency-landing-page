import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function Link({url, title}) {
  return (
    <a
      href={url}
      className="flex items-center gap-2 w-full justify-center underline text-primary text-lg p-2 border-2 rounded-md border-primary hover-special"
    >
     <p>{title}</p>
      <BsBoxArrowUpRight className="w-[40px]"/>
    </a>
  );
}
