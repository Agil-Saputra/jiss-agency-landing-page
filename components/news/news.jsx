import React from "react";
import satpamIlustrasi from "../assets/satpam.webp";
import Image from "next/image";
import Link from "next/link";

export default function News() {
  return (
    <div>
      <h2 className="h2 mb-6">Berita</h2>
      <Link
        href="/mitra/smsb"
        className="md:text-[32px] text-primary text-[15px] underline"
      >
        PUSAT PENDIDIKAN & LATIHAN DASAR SATUAN PENGAMANAN PT. SUMATERA MANDIRI
        SUKSES BERSAMA
      </Link>
      <div className="mt-4">
		<div className="lg:float-right  lg:ml-4 max-lg:my-4 max-md:w-full">
		  <Image
			src={satpamIlustrasi}
			alt="profile"
			width={500}
			height={600}
			className="rounded-lg shadow-lg max-md:w-full"
		  />
		</div>
		<p className="p">
		   Kami hadir disini untuk kamu !!! Dalam rangka berperan aktif mencetak
			Sumber Daya Manusia (SDM) yang memiliki daya saing yang baik, yang
			kita rasakan bersama banyak kelemahan SDM yang belum memiliki standar
			pelayanan dalam pemenuhan posisi kerja diberbagai sektor industri
			kerja jasa. <Link href='/mitra/smsb' className='underline text-primary'>Lihat Detail...</Link>
		</p>
	  </div>
    </div>
  );
}
