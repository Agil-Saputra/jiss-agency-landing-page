import React from "react";
import Image from "next/image";
import satpamIlustrasi from "../../components/assets/satpam.webp";
import brosur from "../../components/assets/brosur.jpeg";
import Navbar from "@/layout/navigation/navbar";

const Information = () => {
  return (
    <Navbar>
      <h2 className="h2 mb-6">Pusat Informasi SMSB</h2>
      <p className="md:text-[32px] text-primary text-[15px]">
        PUSAT PENDIDIKAN & LATIHAN DASAR SATUAN PENGAMANAN PT. SUMATERA MANDIRI
        SUKSES BERSAMA
      </p>
      <div>
        <div className="lg:float-right lg:ml-4 max-lg:my-4 max-md:w-full">
          <Image
            src={satpamIlustrasi}
            alt="profile"
            width={500}
            height={600}
            className="rounded-lg shadow-lg max-md:w-full"
          />
        </div>
        <p className="text-justify p">
          Kami hadir disini untuk kamu !!! Dalam rangka berperan aktif mencetak
          Sumber Daya Manusia (SDM) yang memiliki daya saing yang baik, yang
          kita rasakan bersama banyak kelemahan SDM yang belum memiliki standar
          pelayanan dalam pemenuhan posisi kerja diberbagai sektor industri
          kerja jasa.
          <br />
          Kami membuka peluang untuk masyarakat yang memiliki sedikit keilmuan
          pelayanan dibidang jasa untuk mengasah bahkan menambah keilmuan
          pelayanan jasa sumber daya manusia yang hari ini sangat dibutuhkan
          berbagai bidang industri yang ada.
          <br />
          Dengan mengikuti program Pendidikan & Latihan Dasar Satuan Pengamanan
          yang telah diatur dalam Peratuan kepolisian Nomor 20 Tahun 2020
          Tentang Pengamanan Swakarsa. Setiap siswa didik akan mendapatkan
          keilmuan kepolisan terbatas (Preventor & Mitigator) dan ilmu pelayanan
          publik (Excellent Service) serta mendapatkan Ijazah - Kartu Tanda
          Anggota SATPAM yang diterbitkan langsung dari Mabes Polri.
          <br />
          Agar setiap SDM yang mengikuti program Diksar SATPAM Gada Pratama
          memiliki nilai tambah yang positif selain sebagai investasi jangka
          panjang, SDM juga akan mendapatkan prioritas kesempatan yang sangat
          luas untuk berkarir di perusahaan impiannya.
        </p>
      </div>
      <div>
        <h2 className="h2 capitalize mb-6">Brosur</h2>
        <div className="flex flex-wrap gap-4">
          <Image src={brosur} alt="brosur" width={400} height={400} />
        </div>
      </div>
      <div>
        <h2 className="h2 capitalize mb-6">Formulir</h2>
		<a href="" download>Download</a>
      </div>
    </Navbar>
  );
};

export default Information;
