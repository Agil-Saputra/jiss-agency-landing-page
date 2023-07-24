import React from "react";
import Navbar from "@/layout/navigation/navbar";

// others
import { client } from "@/contentful/client";
import Image from "next/image";
import InfoContainer from "@/components/general/infoContainer";

// fetching data from Contentful CMS
export async function getStaticProps(type) {
  const sponsor = await client.getEntries({ content_type: "sponsor" });
  // passing props for each content-model response
  return {
    props: {
      sponsor,
    },
  };
}

export default function Sponsorship({ sponsor }) {
  return (
    <Navbar>
      <div className="main-padding">
        <h2 className="h2">Sponsor JISS agency</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
          {sponsor.items.map((item, i) => {
            const { namaSponsor, alamatSponsor, fotoSponsor } = item.fields;
            return (
              <div key={i} className="border-2 mt-6 rounded-md">
                <div className="w-full bg-slate-100 p-2">
                  <h3 className="text-xl font-semibold ">
                    {i + 1}. {namaSponsor}
                  </h3>
                  <p>{alamatSponsor}</p>
                </div>
                <div className="p-2">
                  {fotoSponsor.map((foto, i) => (
                    <Image
                      key={i}
                      src={"https:" + foto.fields.file.url}
                      width={400}
                      height={400}
                      alt={foto.fields.title}
                      className="w-full rounded-sm"
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Navbar>
  );
}
