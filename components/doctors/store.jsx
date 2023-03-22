import Image from "next/image";
import star from "../assets/Star.svg";

export default function store({platform, rating}) {
  return (
    <div className="text-center grid place-items-center bg-light py-4 px-8 rounded-2xl">
      <p>Ratings on playstore</p>
      <p className="my-2 text-[28px] font-[500]">{rating}/<span className="text-[18px]">5</span></p>
      <Image src={star} width="100%" height="auto" alt="rating stars" className="mb-4"/>
      <Image src={platform} width={110} height={32} alt="application store"/>
    </div>
  );
}
