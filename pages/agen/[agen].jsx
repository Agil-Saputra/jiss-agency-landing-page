import React from "react";
import Head from "next/head";
import Navbar from "@/layout/navigation/navbar";
import Image from "next/image";
import { client } from "@/contentful/client";
import InfoContainer from "@/components/general/infoContainer";
import ContentInfo from "@/components/agent/contentInfo";
import ContentInfoLink from "@/components/agent/contentInfoLink";
import ContactAgent from "@/components/agent/contactAgent";
export async function getStaticPaths() {
  const product = await client.getEntries({
    content_type: "agen",
  });
  const paths = product.items.map((item) => {
    return {
      params: { agen: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "agen",
    "fields.slug": params.slug,
  });

  return {
    props: {
      agen: items[0],
    },
  };
}

export default function agen({ agen }) {
  const {
    nama,
    alamat,
    fotoAgen,
    nik,
    umur,
    agama,
    pekerjaan,
    jenisKelamin,
    wilayahKabupaten,
    wilayahKecamatandesa,
    whatsapp,
    linkInstagram,
    linkFacebook,
	email,
    slug,
  } = agen.fields;

  return (
    <>
      <Head>
        <title>{nama} | Jasa Inti Solusi Sukses</title>
        <meta
          name="description"
          content="Jasa Inti Solusi Sukses Landing Page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoipsum-223 2.svg" />
      </Head>
      <Navbar>
        <div className="flex gap-4 max-lg:flex-col items-start main-padding">
          <Image
            src={`https:${fotoAgen.fields.file.url}`}
            width={400}
            height={400}
            alt={nama}
            priority
            className="rounded-md object-cover w-full"
          />

          <div>
            <InfoContainer title="Data Diri">
              <ContentInfo title="NIK KTP" info={nik} />
              <ContentInfo title="Nama" info={nama} />
              <ContentInfo title="Jenis Kelamin" info={jenisKelamin} />
              <ContentInfo title="Umur" info={umur} />
              <ContentInfo title="Pekerjaan" info={pekerjaan} />
              <ContentInfo title="Alamat" info={alamat} />
              <ContentInfo title="Agama" info={agama} />
            </InfoContainer>

            <InfoContainer title="Area Operasional">
              <ContentInfoLink
                title="Wilayah Kabupaten"
                info={wilayahKabupaten}
                link="https://opo.com"
              />
              <ContentInfoLink
                title="Wilayah Kecamatan"
                info={wilayahKecamatandesa}
                link="https://opo.com"
              />
            </InfoContainer>

            <InfoContainer title="Kontak Media">
              <ContactAgent whatsappNumber={whatsapp} ig={linkInstagram} facebookLink={linkFacebook} email={email} web={`/agen/${slug}`}/>
            </InfoContainer>
          </div>
        </div>
      </Navbar>
    </>
  );
}
