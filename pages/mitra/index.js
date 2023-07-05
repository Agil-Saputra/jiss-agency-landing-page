import React from "react";
import Navbar from "@/layout/navigation/navbar";
import smsb from "../../components/assets/smsb.svg"
import Image from "next/image";
import Link from "next/link";
export default function index() {
  return (
    <Navbar>
      <p className="p">
        Kami menganggap setiap klien sebagai mitra kerja yang berharga. Kami
        percaya bahwa dengan mendengarkan kebutuhan dan tujuan klien, kami dapat
        menyediakan solusi yang tepat dan memberikan dampak yang signifikan bagi
        kesuksesan bisnis mereka.
      </p>
      <h2 className="h2 mt-5 mb-4">Mitra Kami</h2>
      <Link href='/mitra/smsb' className="grid place-items-center border-2 max-lg:w-full w-fit p-2 rounded-lg cursor-pointer hover:bg-slate-200">
	  <Image 
		src={smsb}
		alt='smsb'
		width={200}
		height={200}
	  />
	  <p className="capitalize p">PT sumatra mandiri 
        sukses bersama</p>
	  </Link>
    </Navbar>
  );
}
