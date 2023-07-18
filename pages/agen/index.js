import React from "react";
import Head from "next/head";
import Navbar from "@/layout/navigation/navbar";
import AgentCard from "@/components/agent/agentCard";

import { client } from "@/contentful/client";
import Link from "@/components/general/link";

// fetching data from Contentful CMS
export async function getStaticProps(type) {
  const agen = await client.getEntries({ content_type: "agen" });
  // passing props for each content-model response
  return {
    props: {
      agen,
    },
  };
}

export default function agen({ agen }) {
  return (
    <>
      <Head>
        <title>Agen JISS Agency | Jasa Inti Solusi Sukses</title>
        <meta
          name="description"
          content="Jasa Inti Solusi Sukses Landing Page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoipsum-223 2.svg" />
      </Head>
      <Navbar>
        <div className="main-padding">
          <h2 className="h2">Resmi AJA</h2>
          <p className="p">
            Kelompok Mitra Kerja Jiss agency dalam memasarkan produk yang{" "}
            <span className="underline">resmi dan terdaftar</span> sebagai
            rekanan <span className="font-bold">AJA (Agen JISS Agency)</span>
          </p>

          <div>
            <h2 className="text-3xl font-semibold max-md:text-2xl capitalize my-6">
              Formulir Pendaftaran AJA
            </h2>
			<Link url="https://forms.gle/8aYA4UfAUomgt3Bi6" title="Daftar Jadi AJA disini"/>
          </div>
          <div className="my-10 w-full">
		  <h2 className="text-3xl font-semibold max-md:text-2xl capitalize my-6">
             Rekanan AJA
            </h2>
            {agen.items.map((item, i) => {
              const { nama, whatsapp, slug, fotoAgen, wilayahKabupaten } =
                item.fields;
              return (
                <AgentCard
                  key={i}
                  name={nama}
                  slug={slug}
                  profilePhoto={fotoAgen.fields.file.url}
                  whatsappNumber={whatsapp}
                  location={wilayahKabupaten}
                />
              );
            })}
          </div>
        </div>
      </Navbar>
    </>
  );
}
