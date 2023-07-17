import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Poppins } from "next/font/google";

const poppins = Poppins( 
  {
    subsets: ['latin', 'devanagari'],
    weight: ['400', '500', '600'],
    style: ['italic', 'normal',]
  }
)

export default function News({ data }) {
  return (
    <div id="berita">
      <h2 className="h2 mb-6">Blog Media Satpam</h2>
      {data.map((item) => {
        const { judulProduk, gambarIlustrasi, slug} = item.fields;
        return (
          <div key={slug} className="flex max-lg:flex-col">
           <div className={poppins.className}>
			 <a
			   href={`/mitra/${slug}`}
			   className="md:text-[32px] text-primary text-[15px] underline capitalize"
			 >
			   {judulProduk}
			 </a>
		   </div>
            <Image
              src={"https:" + gambarIlustrasi.fields.file.url}
              alt="profile"
              width={500}
              height={600}
              className=" shadow-lg lg:ml-4 max-lg:my-4 object-cover max-lg:w-full"
            />
          </div>
        );
      })}
	  <hr className="mt-10"/>
    </div>
  );
}
