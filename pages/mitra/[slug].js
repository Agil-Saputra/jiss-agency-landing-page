import React from "react";
import Image from "next/image";
import Navbar from "@/layout/navigation/navbar";
import { client } from "@/contentful/client";

export async function getStaticPaths() {
  const product = await client.getEntries({
    content_type: "mitra",
  });
  const paths = product.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "mitra",
    "fields.slug": params.slug,
  });

  return {
    props: {
      mitra : items[0],
    },
  };
}

const Mitra = ({ mitra}) => {
	console.log(mitra)
	const { 
		judulProduk,
		gambarIlustrasi, 
		deskripsi, 
		brosur,
		singkatan,
	 } = mitra.fields

  return (
    <Navbar>
      <h2 className="h2 mb-6">Informasi <span className="uppercase">{singkatan}</span></h2>
      <p className="md:text-[32px] text-primary text-[15px]">
       {judulProduk}
      </p>
      <div>
        <div className="lg:float-right lg:ml-4 max-lg:my-4 max-md:w-full">
          <Image
            src={`https:${gambarIlustrasi.fields.file.url}`}
            alt="ilustrasi"
            width={500}
            height={600}
            className="rounded-lg shadow-lg max-md:w-full"
          />
        </div>
        <p className="text-justify p">
         {deskripsi}
        </p>
      </div>
      <div>
        <h2 className="h2 capitalize mb-6">Brosur</h2>
        <div className="flex flex-wrap gap-4">
          <Image src={`https:${brosur.fields.file.url}`} alt="brosur" width={400} height={400} />
        </div>
      </div>
      <div>
        <h2 className="h2 capitalize mb-6">Formulir</h2>
		<a href="" download>Download</a>
      </div>
    </Navbar>
  );
};

export default Mitra;
