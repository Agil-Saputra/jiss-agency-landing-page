import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/layout/navigation/navbar";
import { client } from "@/contentful/client";
import AllPages from "@/components/pdf/all-pages";
import { BsBoxArrowUpRight } from "react-icons/bs";
import InfoContainer from "@/components/general/infoContainer";
import LinkComp from "@/components/general/link";

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
  const {
    judulProduk,
    gambarIlustrasi,
    deskripsi,
    brosur,
    infoDetail,
    linkText,
    infoPentingRefrensi,
    urlFormulir,
  } = mitra.fields;
  return (
    <>
      <Head>
        <title>{judulProduk} | Jasa Inti Solusi Sukses</title>
        <meta
          name="description"
          content="Jasa Inti Solusi Sukses Landing Page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoipsum-223 2.svg" />
      </Head>
      <Navbar>
        <div className="main-padding">
          {urlFormulir && (
            <div className="mb-10 md:grid  md:place-items-center">
              <h2 className="text-3xl font-semibold max-md:text-2xl capitalize my-6">
                Formulir Pendaftaran
              </h2>
              <LinkComp url={urlFormulir} title="Isi Formulir Disini" />
            </div>
          )}
          <h2 className="h2 mb-6">{linkText}</h2>
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
            <p className="text-justify p">{deskripsi}</p>
          </div>

          <div>
            {infoDetail.map((item, i) => {
              const { judulInfo, infoDetail } = item.fields;

              return (
                <InfoContainer key={i} title={judulInfo}>
                  {infoDetail.map((info, i) => (
                    <li key={i}> {info}</li>
                  ))}
                </InfoContainer>
              );
            })}
          </div>

          <div>
            <h2 className="h2 capitalize mb-6">Fasilitas Pendidikan</h2>
          </div>

          <div>
            <h2 className="h2 capitalize mb-6">Informasi & Dokumen Penting</h2>
            {infoPentingRefrensi.map((item, i) => {
              const {
                fileRefrensi,
              } = item.fields;
              return (
                <div key={i}>
                  {fileRefrensi ? (
                    <AllPages pdf={fileRefrensi.fields.file.url} />
                  ) : null}
                </div>
              );
            })}
          </div>

          <div>
            <h2 className="h2 capitalize mb-6 mt-4">Brosur</h2>
            <div className="flex flex-wrap gap-4">
              <Image
                src={`https:${brosur.fields.file.url}`}
                alt="brosur"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Mitra;
