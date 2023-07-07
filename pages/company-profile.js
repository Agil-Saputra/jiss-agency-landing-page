import React, { useState } from "react";
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
    <Navbar>
      <h2 className="h2 mb-6">Our Company Profile</h2>
     <AllPagesPDF pdf={pdfURl}/>
    </Navbar>
  );
}
