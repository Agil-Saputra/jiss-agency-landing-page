import Image from "next/image";
import DoctorLayout from "../layout/doctorlayout";
import rian from "../assets/rian.webp";
import bruno from "../assets/bruno.webp";
import appStore from "../assets/app-store.png";
import playStore from "../assets/play-store.png";
import Store from "./store";

export default function doctors() {
  const lists = [
    "Make doctor appointment",
    "Medicine consultation",
    "Healthcare chat",
    "Health insurance service",
  ];
  return (
    <section id="doctors">
      <DoctorLayout style="max-xl:flex-col">
        <Image
          src={rian}
          width="100%"
          height="auto"
          alt="rian photo"
          priority={true}
          placeholder
        />
        <div>
          <h3 className="h2">
            Your health solution to always ensure the best medical care for
            health
          </h3>
          <p className="p my-6">
            Best medicare service that our loyal customers often use for remote
            health monitoring.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {lists.map((list) => (
              <li key={list} className="list-primary list-none md:text-[20px]">{list}</li>
            ))}
          </div>
        </div>
      </DoctorLayout>

      <DoctorLayout style="mt-24 max-xl:flex-col-reverse">
        <div>
          <h3 className="h2">
            Complete health solutions in the world and download the application
            now!
          </h3>
          <p className="p my-6">
            Worlds first health app with 50 million+ downloads by users and get
            the best health app reviews.
          </p>
          <div className="flex-center gap-8 max-[440px]:flex-col">
            <Store platform={playStore} rating={4.8}/>
            <Store platform={appStore} rating={4.6}/>
          </div>
        </div>
        <Image
          src={bruno}
          width="100%"
          height="auto"
          alt="rian photo"
          priority={true}
          placeholder
        />
      </DoctorLayout>
    </section>
  );
}
