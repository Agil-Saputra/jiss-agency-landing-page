import Image from "next/image";
import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";

export default function card({icon, title, desc,}) {
  return (
    <Link href="/layanan" className={"shadow-sm rounded-md p-4 flex-center flex-col text-center bg-light cursor-pointer border  hover:shadow-xl md:hover:mx-10 transition-all ease-in-out"}>
      <Image width={100} height={100} priority={true} alt="icons" src={icon} className="w-full h-full rounded-sm"/>
      <h3 className="md:text-[2rem] font-[500] my-4 text-[1.5rem] flex items-center gap-4 max-md:underline ">{title}<BsArrowRightCircle/></h3>
    </Link> 
  );
}
