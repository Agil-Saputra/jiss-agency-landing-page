import instagram from "@/assets/icons/socmed/instagram.svg";
import facebook from "@/assets/icons/socmed/facebook.svg";
import whatsapp from "@/assets/icons/socmed/whatsapp.svg";
import { SiWebgl } from "react-icons/si";

import Image from "next/image";

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
        <Image width={40} height={40} src={whatsapp} alt="icon" />
        +{whatsappNumber}
      </a>

      {facebookLink && (
        <a
          href={facebookLink}
          className="font-[600] text-[20px] flex-center gap-2 "
        >
          <Image width={40} height={40} src={facebook} alt="icon" />
          {facebookLink}
        </a>
      )}

      {ig && (
        <a href={ig} className="font-[600] text-[20px] flex-center gap-2 ">
          <Image width={40} height={40} src={instagram} alt="icon" />
          {ig}
        </a>
      )}

      <a href={ig} className="font-[600] text-[20px] flex-center gap-2 ">
        <SiWebgl />
        Website : https://jiss.site{web}
      </a>
    </div>
  );
}
