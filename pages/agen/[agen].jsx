import React from "react";
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
    <Navbar>
      <Link href={"/agen"} className="flex gap-2 items-center">
        <FaArrowLeft />
        Kembali ke Agen
      </Link>
      <div>
        <div className="flex gap-4 max-md:flex-col">
          <Image
            src={`https:${fotoAgen.fields.file.url}`}
            width={400}
            height={400}
            alt={nama}
            priority
            className="rounded-md"
          />
        </div>
		
        <div>
          <p className="p">Nama : {nama}</p>
          <p className="p">Alamat : {alamat}</p>
          <p className="p">NIK : {nik}</p>
          <div className="p">
            Wilayah Pemasaran :
            {wilayahPemasaran.map((item, i) => (
              <p key={i}>- {item}</p>
            ))}
          </div>

        </div>
      </div>
    </Navbar>
  );
}
