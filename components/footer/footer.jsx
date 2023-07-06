import Image from "next/image";
import logo from "../assets/logo.svg";
import instagram from '../assets/icons/socmed/instagram.svg'
import linkedin from '../assets/icons/socmed/linkedin.svg'
import facebook from '../assets/icons/socmed/facebook.svg'

export default function footer() {
  const links = [
    {
      platform: "Instagram",
      link: "https://www.instagram.com/jiss_agency/",
	  icon : instagram
    },
    {
      platform: "Facebook",
      link: "https://web.facebook.com/profile.php?id=100092748260894",
	  icon : facebook
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/company/jiss-agency",
	  icon: linkedin
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
           <Image 
			width={40}
			height={40}
			src={link.icon}
			alt="icon"
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
