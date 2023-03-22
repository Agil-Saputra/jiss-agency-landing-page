import Card from "./card";

import icon1 from "../assets/icons/appointment.webp";
import icon2 from "../assets/icons/pharmacy.webp";
import icon3 from "../assets/icons/consultation.webp";

export default function services() {
  const cards = [
    {
      source: icon1,
      title: "Appointment",
      desc: "Schedule your appointment with your health consultation with the best doctors in medicare",
      color: "bg-light"
    },
    {
      source: icon2,
      title: "Pharmacy",
      desc: "We always provide complete and trusted health solutions to meet your health needs",
      color: "bg-primary text-white"
    },
    {
      source: icon3,
      title: "Consultation",
      desc: "Consult your health condition so that it can behandled immediately by experienced only in Medicare",
      color: "bg-light"
    },
  ];
  return (
    <section className="mb-36 mt-8">
      <div className="flex-center gap-10 my-10 justify-between max-md:flex-col max-md:gap-4">
        <h2 className="h2">All of our services to suit your needs</h2>
        <p className="p">
          Medicare has many services to meet your needs, here are 3 main
          services that are frequently used
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 mt-[3.75rem] grid-cols-1 max-md:px-8">
        {cards.map((card, i) => (
          <Card key={i} icon={card.source} title={card.title} desc={card.desc} bgColor={card.color}/>
        ))}
      </div>
    </section>
  );
}
