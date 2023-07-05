import Head from "next/head";

// import all components
import Navbar from "@/layout/navigation/navbar";
import Hero from "@/components/hero/hero";
import Services from "@/components/services/services";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import News from "@/components/news/news";

import { client } from "@/contentful/client";

// fetching data from Contentful CMS
export async function getStaticProps(type) {
  const layanan = await client.getEntries({ content_type: "layanan" })

  // passing props for each content-model response
  return {
    props: {
      layanan,
    },
  };
}

export default function Home({layanan}) {
  return (
    <>
      <Head>
        <title>Jasa Inti Solusi Sukses</title>
        <meta name="description" content="Mediacare Dashboard Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoipsum-223 2.svg" />
      </Head>
      <Navbar>
        <main>
          <Hero />
          <Services data={layanan.items}/>
          <News />
          <Contact />
          <Footer />
        </main>
      </Navbar>
    </>
  );
}
