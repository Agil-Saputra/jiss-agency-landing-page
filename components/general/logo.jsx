import React from "react";
import Image from "next/image";
import logo from "../assets/logo.svg"

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={logo}
        width={70}
        height={70}
        alt="Mediacare Logo"
        priority={true}
      />
      <p className="text-[2.5rem] uppercase">Jiss</p>
    </div>
  );
};
