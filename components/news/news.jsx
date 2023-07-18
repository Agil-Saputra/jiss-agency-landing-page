import React from "react";
import Image from "next/image";
import Link from "../general/link";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
});

export default function News({ dataMedia }) {
  console.log(dataMedia.map((item) => item));
  return (
    <div>
      <h2 className="h2 mb-6">Blog Media Satpam</h2>
      <div className="flex gap-4 max-md:flex-col">
        {dataMedia.map((item, i) => {
          const { judul, ilustrasiMedia, urlMedia } = item.fields;
          return (
            <div key={i} className="p-2 border-2 rounded-md group h-fit">
              <Link url={urlMedia} title={judul} />
              <Image
                width={400}
                height={400}
                src={"https:" + ilustrasiMedia.fields.file.url}
                className="mt-4 w-full md:h-[300px] object-cover skeleton-bg"
				alt="ilustrasi media"
              />
            </div>
          );
        })}
      </div>
      <hr className="mt-10" />
    </div>
  );
}
