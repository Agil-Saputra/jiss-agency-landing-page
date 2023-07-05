import Card from "./card";

import digital from "../assets/icons/digital.png";
import direct from "../assets/icons/direct.png";
import develop from "../assets/icons/develop.png";

export default function services({ data }) {
  const cards = [
    {
      source: digital,
      title: "Digital Marketing",
      desc: "Kami menyediakan strategi dan layanan digital marketing yang terdepan dalam memaksimalkan kehadiran online klien kami, pemasaran media sosial, kampanye iklan online, dan pengoptimalan konversi, kami membantu klien kami mencapai visibilitas yang lebih tinggi di platform digital, dan menghasilkan lead berkualitas.",
    },
    {
      source: direct,
      title: "Direct Marketing",
      desc: "Kami mengembangkan strategi direct marketing yang efektif untuk membantu klien kami menjangkau dan berinteraksi langsung dengan target pasar mereka. Melalui periklanan cetak, promosi penjualan, kegiatan pemasaran langsung, dan pemanfaatan data konsumen yang akurat, kami membantu klien kami mencapai hasil yang lebih baik dalam hal penjualan, pengenalan merek, dan retensi pelanggan.",
    },
    {
      source: develop,
      title: "Develop Marketing",
      desc: "Kami juga menawarkan layanan develop marketing yang bertujuan untuk membantu klien kami mengembangkan produk dan layanan mereka. Dengan menggunakan pendekatan riset pasar, analisis persaingan, dan pemahaman mendalam tentang kebutuhan pelanggan, kami membantu klien kami merancang strategi pengembangan produk yang efektif dan meluncurkan produk yang sukses ke pasar",
    },
  ];
  return (
    <section id="layanan" className="md:mb-36 mb-10 mt-8">
      <div className="my-10">
        <h2 className="h2">Semua Layanan Kami</h2>
        <p className="p">
          Jasa Inti Solusi Sukses mempunyai banyak layanan untuk kebutuhan mu,
          Berikut 3 Layanan yang paling sering digunakan :
        </p>
      </div>
      <div className="flex flex-wrap gap-4 mt-[3.75rem]  max-md:px-2">
        {data.map((layanan, i) => {
			const {judulLayanan, deskripsiLayanan, ilustrasiLayanan} = layanan.fields
          return (
            <Card
              key={i}
              icon={'https:' + ilustrasiLayanan.fields.file.url}
              title={judulLayanan}
              desc={deskripsiLayanan}
            />
          );
        })}
      </div>
    </section>
  );
}
