import Button1 from "../general/button1";
import Button2 from "../general/button2";

export default function hero() {
  return (
    <section id="home" className="md:mb-[5.5625rem] mb-4 mt-20 max-md:mt-10 ">
      <div>
        <h1 className="h1 my-6 md:max-w-[25ch]">
          👋Hai!! Selamat Datang Di Pusat Informasi JISS Agency
        </h1>
        <h2 className="h2 font-bold text-primary ">
          {" "}
          &ldquo;Bergabung Bertumbuh Bersama&ldquo;
        </h2>
        <p className="my-8 p lg:text-left text-justify">
          Perkenalkan, kami Jasa Inti Solusi Sukses, sebuah perusahaan yang
          bergerak di bidang jasa agensi pemasaran. Kami hadir sebagai startup
          marketing agency untuk menjawab kebutuhan pemasaran produk yang Anda
          hadapi. Sejalan dengan nama, simbol, dan logo perusahaan kami:
          <br />
          <br />
          1.<strong>Jasa Inti Solusi Sukses</strong> kami bergerak di bidang
          jasa yang khusus menangani inti persoalan perusahaan. Kami akan
          menjadi solusi untuk membuat usaha Anda sukses.
          <br />
          <br />
          2.<strong>Logo</strong> kami berbentuk heksagonal rumah lebah, yang
          menggambarkan
          <strong> spirit kami sebagai perusahaan pelengkap</strong>, bukan
          pesaing atau penantang yang dianggap sebagai ancaman oleh kompetitor.
          <br />
          <br />
          3.Jasa Inti Solusi Sukses hadir sebagai pelengkap.
          <strong> Simbol hewan kupu-kupu cantik berwarna kuning </strong>
          Kupu-kupu yang memiliki pesan bahwa kami selalu{" "}
          <i>memiliki progress yang baik dalam setiap proses</i> dan kupu - kupu
          dikenal sebagai hewan yang mampu menjadi penstabil ekosistim alam
          dengan sifat <i>simbiosis mutualisme</i>, sedangkan warna kuning
          adalah warna kejayaan dan kesuksesan.
          <br />
          <br />
          Kami siap membantu Anda mengatasi berbagai tantangan dalam pemasaran
          produk Anda.
        </p>

        <div className="marquee">
          <p>
            Silahkan Cari Produk Yang Anda butuhkan Kami akan melayani anda
            dengan sepenuh Hati♥️.
          </p>
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
