import Button1 from "../general/button1";
import Button2 from "../general/button2";

import Image from "next/image";
import jissLogo from "../assets/logo.svg"

export default function hero() {
  return (
    <section
      id="home"
      className="md:mb-[5.5625rem] mb-4 mt-10 md:text-center grid place-items-center lg:min-h-[70vh]"
    >
	<div>

	</div>
      <div>
		<h1 className="h1 md:px-10 ">Jasa Inti Solusi Sukses</h1>
		<p className="my-6 p text-justify">
		  Kami adalah sebuah marketing agency yang mempunyai misi untuk
		  mendengarkan kebutuhan dan tujuan klien kami. Kami melayani dengan penuh
		  dedikasi, memberikan solusi pemasaran yang inovatif dan efektif. Motto
		  kami adalah <span className="font-bold text-primary "> &ldquo;Bergabung Berkembang Bersama&ldquo;</span>, kami percaya bahwa dengan
		  bergabung dan bekerja sama, kita dapat saling membantu dalam mencapai
		  kesuksesan. Kami membuat strategi yang sesuai dengan visi dan misi klien
		  kami, dan berupaya memberikan hasil yang memuaskan.
		</p>
		<div className="flex-center gap-6 max-sm:flex-col w-full justify-center">
		  <Button1 title="Lihat Produk" href="#layanan" />
		  <Button2 title="Registrasi" href="#" style="border-primary" />
		</div>
	  </div>
    </section>
  );
}
