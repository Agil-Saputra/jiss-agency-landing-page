import Image from "next/image";
import instagram from '@/assets/icons/socmed/instagram.svg'
import linkedin from '@/assets/icons/socmed/linkedin.svg'
import facebook from '@/assets/icons/socmed/facebook.svg'

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
      link: "https://www.linkedin.com/company/jasa-inti-solusi-sukses/",
	  icon: linkedin
    },
  ];
  return (
 <>
	   <footer className="flex-center justify-between text-white max-lg:flex-col max-lg:items-start max-lg: gap-10 px-4 md:px-[8.675rem] pb-4">
		 <div className="flex-center gap-10 max-lg:flex-col max-lg:items-start">
		   {links.map((link, i) => (
			 <a
			   key={i}
			   href={link.link}
			   className="font-[600] text-[20px] flex-center gap-2 "
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
	   </footer>
	   <div className="bg-primary font-thin text-black text-center">• Jasa Inti Solusi Sukses 2023©️ •</div>
 </>
  );
}
