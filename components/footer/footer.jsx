import Image from "next/image";
import { TfiArrowCircleRight } from "react-icons/tfi";
import logo from "../assets/logo.svg";

export default function footer() {
  const links = [
    {
      platform: "Instagram",
      link: "#",
    },
    {
      platform: "Twitter",
      link: "#",
    },
    {
      platform: "Facebook",
      link: "#",
    },
    {
      platform: "LinkedIn",
      link: "#",
    },
  ];
  return (
    <footer className="flex-center justify-between my-6 max-lg:flex-col max-lg:items-start max-lg: gap-10">
      <div className="flex items-center gap-2">
        <Image
          src={logo}
          width={70}
          height={70}
          alt="Mediacare Logo"
          priority={true}
        />
        <p className="text-[3rem] uppercase">Jiss</p>
      </div>
      <div className="flex-center gap-10 max-lg:flex-col max-lg:items-start">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.link}
            className="font-[600] text-[20px] flex-center gap-2"
          >
            <TfiArrowCircleRight
              size={30}
              className="hover:-rotate-45 smooth"
            />
            {link.platform}
          </a>
        ))}
      </div>
      <a href="#home">
        <p className="text-secondary font-[600] text-[26px] hover:text-black smooth cursor-pointer">
          Kembali Ke Beranda
        </p>
      </a>
    </footer>
  );
}
