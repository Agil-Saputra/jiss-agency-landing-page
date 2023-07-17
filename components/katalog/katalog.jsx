import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
});

export default function Katalog() {
  return (
    <div id="katalog" className="mb-10">
      <h2 className="h2 mb-6">Katalog Produk</h2>
      <h3 className="text-xl md:text-3xl font-semibold">
        PUSAT PENDIDIKAN & LATIHAN DASAR SATUAN PENGAMANAN
      </h3>
      <p className="text-xl mb-3 md:text-2xl font-semibold mt-6">
        Kualifikasi :{" "}
      </p>
      <div className="flex max-md:flex-col text-left gap-4">
        <Link
          href={"/"}
          className="md:min-w-[400px] text-lg md:text-2xl underline text-primary border-primary border-[1px] py-1 px-2 flex items-center gap-2 justify-between rounded-sm hover:scale-105 hover:bg-gradientPrimary hover:text-white hover:bg-opacity-75 transition-all "
        >
          Diksar Gada Pratama
          <BsBoxArrowUpRight />
        </Link>
      </div>
    </div>
  );
}
