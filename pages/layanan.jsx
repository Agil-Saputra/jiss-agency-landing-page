import React from "react";
import Navbar from "@/layout/navigation/navbar";
import { client } from "@/contentful/client";
import Image from "next/image";
// fetching data from Contentful CMS
export async function getStaticProps(type) {
  const layanan = await client.getEntries({ content_type: "layanan" });
  // passing props for each content-model response
  return {
    props: {
      layanan,
    },
  };
}

export default function layanan({ layanan }) {
  return (
    <Navbar>
	  <h2 className="h2">Semua Layanan Kami :</h2>
      <div className="flex justify-center max-md:flex-col mt-[3.75rem] gap-6 max-md:px-2">
        {layanan.items.map((item, i) => {
          const { judulLayanan, deskripsiLayanan, ilustrasiLayanan } =
            item.fields;
          return (
            <div
			key={i}
              className={
                "shadow-sm rounded-[14px] p-4 flex-center flex-col text-center bg-light cursor-pointer md:hover:bg-slate-300"
              }
            >
              <Image
                width={100}
                height={100}
                priority={true}
                alt="icons"
                src={`https:${ilustrasiLayanan.fields.file.url}`}
              />
              <h3 className="md:text-[2rem] font-[500] my-8 text-[1.5rem] max-md:underline ">
                {judulLayanan}
              </h3>
              <p className="md:text-[22px]">{deskripsiLayanan}</p>
            </div>
          );
        })}
      </div>
    </Navbar>
  );
}
