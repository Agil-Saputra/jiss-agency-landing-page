import Card from "./card";

import icon1 from "../assets/icons/appointment.webp";
import icon2 from "../assets/icons/pharmacy.webp";
import icon3 from "../assets/icons/consultation.webp";

export default function services() {
  const cards = [
    {
      source: icon1,
      title: "Digital Marketing",
      desc: "Schedule your appointment with your health consultation with the best doctors in medicare",
    },
    {
      source: icon2,
      title: "Direct Marketing",
      desc: "We always provide complete and trusted health solutions to meet your health needs",
    },
    {
      source: icon3,
      title: "Develop Marketing",
      desc: "Consult your health condition so that it can behandled immediately by experienced only in Medicare",
    },
  ];
  return (
    <section id="layanan" className="md:mb-36 mb-10 mt-8">
      <div className="flex-center gap-10 my-10 justify-between max-md:flex-col max-md:gap-4">
        <h2 className="h2">Semua Layanan Kami</h2>
        <p className="p">
          Jasa Inti Solusi Sukses mempunyai banyak layanan untuk kebutuhan mu, Berikut 3 Layanan yang paling sering digunakan :
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 mt-[3.75rem] grid-cols-1 max-md:px-2">
        {cards.map((card, i) => (
          <Card key={i} icon={card.source} title={card.title} desc={card.desc} bgColor={card.color}/>
        ))}
      </div>
    </section>
  );
}
