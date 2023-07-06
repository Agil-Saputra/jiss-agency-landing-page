import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function News({ data }) {
  // const {Judul Produk} = data[0].fields
  console.log(data);
  return (
    <div id="berita">
      <h2 className="h2 mb-6">Berita</h2>
      {data.map((item) => {
        const { judulProduk, gambarIlustrasi, thumbnailDeskripsi, slug } =
          item.fields;
        return (
          <>
            <Link
              href={`/mitra/${slug}`}
              className="md:text-[32px] text-primary text-[15px] underline uppercase"
            >
              {judulProduk}
            </Link>
            <div className="mt-4">
              <div className="lg:float-right  lg:ml-4 max-lg:my-4 max-md:w-full">
                <Image
                  src={"https:" + gambarIlustrasi.fields.file.url}
                  alt="profile"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg max-md:w-full"
                />
              </div>
              <p className="p">
                {thumbnailDeskripsi}
                <Link href={`/mitra/${slug}`} className="underline text-primary">
                  Lihat Detail...
                </Link>
              </p>
            </div>
          </>
        );
      })}
    </div>
  );
}
