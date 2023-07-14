import React from "react";
import Head from "next/head";
import Navbar from "@/layout/navigation/navbar";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { client } from "@/contentful/client";

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
  const { nama, alamat, fotoAgen, nik, wilayahPemasaran, slug } = agen.fields;

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
        <Link
          href={"/agen"}
          className="flex gap-2 items-center mb-6 px-2 py-1 border-[1px] rounded-lg w-fit"
        >
          <FaArrowLeft />
          Kembali ke Agen
        </Link>
        <div className="flex gap-4 max-md:flex-col">
          <Image
            src={`https:${fotoAgen.fields.file.url}`}
            width={400}
            height={400}
            alt={nama}
            priority
            className="rounded-md"
          />

          <div>
            <p className="p">
              <span className="font-bold text-xl md:text-3xl">Nama :</span>{" "}
              {nama}
            </p>
            <p className="p">
              <span className="font-bold text-xl md:text-3xl">Alamat : </span>
              {alamat}
            </p>
            <p className="p">
              <span className="font-bold text-xl md:text-3xl">NIK :</span> {nik}
            </p>
            <div className="p">
              <span className="font-bold text-xl md:text-3xl">
                Wilayah Pemasaran :
              </span>
              {wilayahPemasaran.map((item, i) => (
                <p key={i}>- {item}</p>
              ))}
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}
