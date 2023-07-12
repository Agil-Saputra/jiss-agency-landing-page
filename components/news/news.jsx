import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function News({ data }) {
  return (
    <div id="berita">
      <h2 className="h2 mb-6">Berita</h2>
      {data.map((item) => {
        const { judulProduk, gambarIlustrasi, slug, i } =
          item.fields;
        return (
          <Link key={i} href={`/mitra/${slug}`} className="flex max-lg:flex-col">
            <a
              href={`/mitra/${slug}`}
              className="md:text-[32px] text-primary text-[15px] underline uppercase"
            >
              {judulProduk}
            </a>
    
                <Image
                  src={"https:" + gambarIlustrasi.fields.file.url}
                  alt="profile"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg lg:ml-4 max-lg:my-4 object-cover max-lg:w-full"
                />
              
          </Link>
        );
      })}
    </div>
  );
}
