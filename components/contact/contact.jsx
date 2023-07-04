import Button2 from "../general/button2";

export default function contact() {
  return (
    <section id="contact" className=" rounded-[1rem] py-10 mt-32 px-4 placeholder">
      <h2 className="h2  max-w-[26ch]">
        Kontak
      </h2>
      <p className="p my-6">
	  Email : <a href="mailto:jissagency@gmail.com" className=" underline-offset-[6px] hover:underline">jissagency@gmail.com</a>
      </p>
      <p className="p my-6">
	  No HP / Whatsapp : <a href="https://wa.me/6282178006840" className="y8underline-offset-[6px] hover:underline">+62-821-7800-6840</a>
      </p>
      <p className="p my-6">
	  Alamat : <a href="https://wa.me/6282178006840" className="y8underline-offset-[6px] hover:underline"></a>
      </p>
      <Button2 title="Join us now!" href=""/>
    </section>
  );
}
