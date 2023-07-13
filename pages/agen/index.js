import React from "react";
import Navbar from "@/layout/navigation/navbar";
import AgentCard from "@/components/agent/agentCard";

import { client } from "@/contentful/client";

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

export default function agen({agen}) {
  return (
    <Navbar>
	
      <h2 className="h2">Resmi AJA</h2>
      <p className="p">
        Kelompok Mitra Kerja Jiss agency dalam memasarkan produk yang <span className="underline">resmi dan
        terdaftar</span> sebagai rekanan <span className="font-bold">AJA (Agen JISS Agency)</span>
      </p>
	  <div className="my-10 w-full">
		{
			agen.items.map((item, i) => {
				const {nama, nik, alamat, jenisKelamin, fotoAgen, wilayahPemasaran, slug} = item.fields
				return (
					<AgentCard key={i} name={nama} address={alamat}  slug={slug} gender={jenisKelamin} id={nik} profilePhoto={fotoAgen.fields.file.url} marketLocation={wilayahPemasaran}/>
				)
			})
		}
	  </div>
    </Navbar>
  );
}
