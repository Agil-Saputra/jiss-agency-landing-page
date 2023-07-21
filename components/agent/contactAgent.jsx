import instagram from "@/assets/icons/socmed/instagram.svg";
import facebook from "@/assets/icons/socmed/facebook.svg";
import whatsapp from "@/assets/icons/socmed/whatsapp.svg";
import { MdWebAsset } from "react-icons/md";
import { FaCopy } from "react-icons/fa";

import Image from "next/image";
import { useState } from "react";

export default function ContactAgent({
  whatsappNumber,
  facebookLink,
  email,
  ig,
  web,
}) {
  return (
    <div className="flex flex-col gap-4">
      <a
        href={`https://wa.me/${whatsappNumber}`}
        className="font-[600] text-[20px] flex-center gap-2 "
      >
        <Image width={40} height={40} src={whatsapp} alt="icon" /> : +
        {whatsappNumber}
      </a>

      {facebookLink && (
        <a
          href={facebookLink}
          className="font-[600] text-[20px] flex-center gap-2 "
        >
          <Image width={40} height={40} src={facebook} alt="icon" /> :
          {facebookLink}
        </a>
      )}

      {ig && (
        <a href={ig} className="font-[600] text-[20px] flex-center gap-2 ">
          <Image width={40} height={40} src={instagram} alt="icon" /> :{ig}
        </a>
      )}

      <p
        onCopy={(e) => {
          e.preventDefault();
          e.clipboardData.setData("text/plain", "Hello, world!");
        }}
        className="font-[600] text-[20px] flex-center "
      >
        <MdWebAsset fontSize={45} />
        Website : https://jiss.site{web}
      </p>
    </div>
  );
}
