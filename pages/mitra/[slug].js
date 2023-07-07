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
      mitra: items[0],
    },
  };
}

const Mitra = ({ mitra }) => {
	const { judulProduk, gambarIlustrasi, deskripsi, brosur, infoDetail, welcomeText, infoPentingRefrensi } = mitra.fields;

  return (
    <Navbar>  
		<h2 className="h2 mb-6">
		  {welcomeText}
		</h2>
      <p className="md:text-[32px] text-primary text-[15px]">{judulProduk}</p>
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
        <p className="text-justify p">{deskripsi}</p>
      </div>

      <div>
		{infoDetail.map((item, i) => {
			const {judulInfo, infoDetail} = item.fields
			return (
				<div key={i} className="mb-2">
					<h3 className="lg:text-3xl text-[1.2rem] font-bold">{judulInfo} : </h3>
					<ul>
						{infoDetail.map((item, i) => <li className="p" key={i}> - {item}</li>)}
					</ul>
				</div>
			)
		})}
      </div>

      <div>
        <h2 className="h2 capitalize mb-6">Informasi Penting & Referensi</h2>
        {
			infoPentingRefrensi.map((item, i) => {
				const {judulRefrensi, ilustrasiRefrensi, websiteReferensi, fileRefrensi} = item.fields
				return (
					<div key={i}>
						<h3 className="lg:text-3xl text-[1.2rem] font-bold my-4">{judulRefrensi}</h3>
						<Image 
							src={`https:${ilustrasiRefrensi.fields.file.url}`}
							width={400}
							height={400}
							alt="ilustrasi refrensi"
							className="rounded-md mb-4"
						/>
						{websiteReferensi ? <a href={websiteReferensi} className="underline text-primary mt-3">Info Lebih lanjut Klik Disini</a>: null}
						{fileRefrensi ? <iframe src={`https:${fileRefrensi.fields.file.url}`} className="h-screen w-full">Info Lebih lanjut Klik Disini</iframe>: null}

					</div>
				)
			})
		}
      </div>

      <div>
        <h2 className="h2 capitalize mb-6">Brosur</h2>
        <div className="flex flex-wrap gap-4">
          <Image
            src={`https:${brosur.fields.file.url}`}
            alt="brosur"
            width={400}
            height={400}
          />
        </div>
      </div>

      <div>
        <h2 className="h2 capitalize my-6">Download Formulir</h2>
        <a href="" download>
          Download
        </a>
      </div>
    </Navbar>
  );
};

export default Mitra;
