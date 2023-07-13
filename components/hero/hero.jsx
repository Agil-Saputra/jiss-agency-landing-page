import Button1 from "../general/button1";
import Button2 from "../general/button2";

export default function hero() {
  return (
    <section
      id="home"
      className="md:mb-[5.5625rem] mb-4 mt-20 max-md:mt-10 "
    >
      <div>
        <h1 className="h1 my-6 md:max-w-[25ch]">
          Hai!! Selamat Datang Di Pusat Informasi JISS Agency
        </h1>
        <h2 className="h2 font-bold text-primary ">
          {" "}
          &ldquo;Bergabung Bertumbuh Bersama&ldquo;
        </h2>
        <p className="my-8 p lg:text-left text-justify">
          Kami hadir sebagai pelengkap usaha anda untuk menjadi mitra terpercaya
          dalam memasarkan produk barang dan jasa anda ke pelosok negeri, sesuai
          dengan logo kami kupu-kupu yang menjadi simbol simbiosis mutualisme
          dalam ekosistem yang ada, serta logo kami yang berbentuk hexagonal yang
          menjadi serpihan puzzle atau pelengkap dari setiap kebuntuan masalah
          anda. Kami percaya Dengan Moto &ldquo;Bergabung Bertumbuh
          Bersama&ldquo; kita akan menjadi rekanan yang saling menguntungkan.
        </p>

		<div className="marquee">
          <p>Silahkan Cari Produk Yang Anda butuhkan
          Kami akan melayani anda dengan sepenuh Hati.</p>
		</div>


        <div className="flex-center gap-6 max-sm:flex-col w-full justify-start mt-10">
          <Button1 title="Lihat Layanan" href="/layanan" />
          <Button2
            title="Company Profile "
            href="/company-profile"
            style="border-primary"
          />
        </div>
      </div>
	 
    </section>
  );
}
