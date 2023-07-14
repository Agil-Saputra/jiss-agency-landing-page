import React from "react";
import Head from "next/head";
import Navbar from "@/layout/navigation/navbar";
import { client } from "@/contentful/client";
import AllPagesPDF from "@/components/pdf/all-pages";

// fetching data from Contentful CMS
export async function getStaticProps(type) {
  const redaksi = await client.getEntries({ content_type: "redaksi" });

  return {
    props: {
      redaksi,
    },
  };
}

export default function companyProfile({ redaksi }) {
  const pdfURl = redaksi.items[0].fields.companyProfile.fields.file.url;
  return (
    <>
      <Head>
        <title>Company Profile | Jasa Inti Solusi Sukses</title>
        <meta
          name="description"
          content="Jasa Inti Solusi Sukses Landing Page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoipsum-223 2.svg" />
      </Head>
      <Navbar>
        <h2 className="h2 mb-6">Our Company Profile</h2>
        <AllPagesPDF pdf={pdfURl} />
      </Navbar>
    </>
  );
}
