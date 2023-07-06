import React from "react";
import Navbar from "@/layout/navigation/navbar";
import smsb from "../../components/assets/smsb.svg";
import Image from "next/image";
import Link from "next/link";

import { client } from "@/contentful/client";

// fetching data from Contentful CMS
export async function getStaticProps(type) {
  const mitra = await client.getEntries({ content_type: "mitra" });
  // passing props for each content-model response
  return {
    props: {
      mitra,
    },
  };
}

export default function index({ mitra }) {
	console.log(mitra)
  return (
    <Navbar>
      <p className="p">
        Kami menganggap setiap klien sebagai mitra kerja yang berharga. Kami
        percaya bahwa dengan mendengarkan kebutuhan dan tujuan klien, kami dapat
        menyediakan solusi yang tepat dan memberikan dampak yang signifikan bagi
        kesuksesan bisnis mereka.
      </p>
      <h2 className="h2 mt-5 mb-4">Mitra Kami</h2>
      {mitra.items.map((item) => {
		const {slug, judul} = item.fields
        return (
            <Link
			key={slug}
              href={`/mitra/${slug}`}
              className="grid place-items-center border-2 max-lg:w-full w-fit p-2 rounded-lg cursor-pointer hover:bg-slate-200"
            >
              <Image src={smsb} alt="smsb" width={200} height={200} />
              <p className="capitalize p">{judul}</p>
            </Link>
        );
      })}
    </Navbar>
  );
}
