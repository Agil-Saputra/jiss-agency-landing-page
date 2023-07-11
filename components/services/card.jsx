import Image from "next/image";
import Link from "next/link";

export default function card({icon, title, desc,}) {
  return (
    <Link href="/layanan" className={"shadow-sm rounded-[14px] p-4 flex-center flex-col text-center bg-light cursor-pointer md:hover:bg-slate-300"}>
      <Image width={100} height={100} priority={true} alt="icons" src={icon}/>
      <h3 className="md:text-[2rem] font-[500] my-8 text-[1.5rem] max-md:underline ">{title}</h3>
    </Link> 
  );
}
