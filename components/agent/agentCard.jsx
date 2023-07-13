import React from "react";
import Link from "next/link";
import Image from "next/image";
import {BsLink45Deg} from "react-icons/bs"

export default function AgentCard({
  name,
  id,
  gender,
  address,
  profilePhoto,
  marketLocation,
  slug,
}) {
  return (
    <div  className="p-2 border-[1px] border-black  w-fit rounded-md relative">
      <Link href={`/agen/${slug}`}>
		<Image
		  src={`https:${profilePhoto}`}
		  width={200}
		  height={200}
		  alt={slug}
		  priority
		  className="max-md:w-full rounded-md"
		/>
		<div className="text-center">
			<h3 className="text-xl font-bold ">{name}</h3>
			<p>{address}</p>
			<BsLink45Deg className="absolute bottom-0 right-0" fontSize={20}/>
		</div>
	  </Link>
    </div>
  );
}
