import React from "react";
import Link from "next/link";
import Image from "next/image";

import { BsLink45Deg } from "react-icons/bs";
import instagram from "@/assets/icons/socmed/instagram.svg";
import facebook from "@/assets/icons/socmed/facebook.svg";
import whatsapp from "@/assets/icons/socmed/whatsapp.svg";

export default function AgentCard({
  name,
  address,
  profilePhoto,
  whatsappNumber,
  instagramLink,
  facebookLink,
  location,
  slug,
}) {
  return (
    <div className="p-2 border-[1px] border-black w-fit rounded-md relative">
      <Link href={`/agen/${slug}`}>
        <Image
          src={`https:${profilePhoto}`}
          width={200}
          height={200}
          alt={slug}
          priority
          className="max-lg:w-full rounded-md"
        />
      </Link>
      <div className="text-center">
        <h3 className="text-xl font-bold  ">{name}</h3>
        <p>{location}</p>
        <BsLink45Deg className="absolute bottom-0 right-0" fontSize={20} />
        <a
          href={`https://wa.me/${whatsappNumber}`}
          className="font-[600] text-[20px] flex-center gap-2 "
        >
          <Image width={40} height={40} src={whatsapp} alt="icon wa" />
          {whatsappNumber}
        </a>
      </div>
    </div>
  );
}
