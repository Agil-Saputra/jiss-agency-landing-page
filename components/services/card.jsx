import Image from "next/image";

export default function card({icon, title, desc, bgColor}) {
  return (
    <div className={"shadow-sm rounded-[14px] px-4 py-8 flex-center flex-col text-center bg-light"}>
      <Image width={100} height={100} priority={true} alt="icons" src={icon}/>
      <h3 className="md:text-[2rem] font-[500] my-8 text-[1.5rem]">{title}</h3>
      <p className="md:text-[22px]">{desc}</p>
    </div> 
  );
}
