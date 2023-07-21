import React, { useState } from "react";
import Head from "next/head";
import Navbar from "@/layout/navigation/navbar";
import Image from "next/image";
import { client } from "@/contentful/client";
import InfoContainer from "@/components/general/infoContainer";
import ContentInfo from "@/components/agent/contentInfo";
import ContentInfoLink from "@/components/agent/contentInfoLink";
import ContactAgent from "@/components/agent/contactAgent";

import { BsDownload } from "react-icons/bs";
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
    umur,
    agama,
    pekerjaan,
    jenisKelamin,
    nomorRegistrasi,
    nomorPks,
    wilayahKabupaten,
    wilayahKecamatandesa,
    whatsapp,
    linkInstagram,
    linkFacebook,
    email,
    slug,
    fotoLokasiAgen,
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
            className="rounded-md object-cover w-full lg:sticky top-16 p-4 border-2 md:w-[600px] "
          />

          <div>
            <InfoContainer title="Data Diri">
              <ContentInfo title="Nama" info={nama} />
              <ContentInfo title="Jenis Kelamin" info={jenisKelamin} />
              <ContentInfo title="Umur" info={umur} />
              <ContentInfo title="Pekerjaan" info={pekerjaan} />
              <ContentInfo title="Alamat" info={alamat} />
              <ContentInfo title="Agama" info={agama} />
            </InfoContainer>

            <InfoContainer title="Info Keagenan">
              <ContentInfo title="Nomor Perjanjian Kerjasama" info={nomorPks} />
              <ContentInfo title="Nomor Registrasi" info={nomorRegistrasi} />
            </InfoContainer>

            <InfoContainer title="Sertifikat Keagenan">
              <a
                href={""}
                download
                className="flex border-2 border-primary text-primary px-3 py-1 rounded-md items-center justify-between gap-4"
              >
                Download Sertifikat
                <BsDownload />
              </a>
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

            <InfoContainer title="Foto Lokasi Agen">
              {fotoLokasiAgen.map((item, i) => {
                item.fields;
                return (
                  <Image
                    key={i}
                    src={"https:" + item.fields.file.url}
                    width={400}
                    height={400}
                    alt={item.fields.title}
                    className="w-full mb-4 rounded-sm "
                  />
                );
              })}
            </InfoContainer>

            <InfoContainer title="Kontak Media">
              <ContactAgent
                whatsappNumber={whatsapp}
                ig={linkInstagram}
                facebookLink={linkFacebook}
                email={email}
                web={`/agen/${slug}`}
              />
            </InfoContainer>
          </div>
        </div>
      </Navbar>
    </>
  );
}
