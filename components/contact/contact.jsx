import { FaWhatsappSquare } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si"
import { IoIosMail } from "react-icons/io"
export default function contact() {
	const setIcons = {
		fontSize:50,
		className: "mb-3"
	}
  return (
    <section
      id="contact"
      className=" py-10 mt-12 px-4 md:px-[8.6875rem] text-white flex items-center  lg:items-start  max-lg:flex-col justify-between gap-6"
    >
      <h2 className="h2  max-w-[26ch] mb-6">Kontak</h2>
      <div className="grid place-items-center text-center">
	  <IoIosMail {...setIcons}/>
	  <h3 className="text-xl font-bold">Email</h3>
        <a
          href="mailto:jissagency@gmail.com"
          className=" underline-offset-[6px] underline "
        >
          jissagency@gmail.com
        </a>
      </div>

	  <div className="grid place-items-center text-center">
        <SiGooglemaps {...setIcons}/>
		<h3 className="text-xl font-bold">Kantor Pusat</h3>
        <a href="https://goo.gl/maps/Nvig62WXAra1e9Bn7" className="md:max-w-[38ch] underline">
          Tugu Harum, Kec. Belitang Madang Raya, Kabupaten Ogan Komering Ulu
          Timur, Sumatera Selatan 32382, Indonesia
        </a>
      </div>

      <div className="grid place-items-center text-center ">
        <FaWhatsappSquare {...setIcons}/>
		<h3 className="text-xl font-bold">Whatsapp</h3>
        <a
          href="https://wa.me/6282178006840"
          className="y8underline-offset-[6px] underline"
        >
          +62-821-7800-6840
        </a>
      </div>
    </section>
  );
}
