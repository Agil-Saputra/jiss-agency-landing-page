import Head from "next/head";

// import all components
import Navbar from "@/layout/navigation/navbar";
import Hero from "@/components/hero/hero";
import Services from "@/components/services/services";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import News from "@/components/news/news";
import Questions from "@/components/questions/question";
import SliderPeople from "@/components/people/sliderPeople";

import { client } from "@/contentful/client";

// fetching data from Contentful CMS
export async function getStaticProps(type) {
  const layanan = await client.getEntries({ content_type: "layanan" });
  const mitra = await client.getEntries({ content_type: "mitra" });
  // passing props for each content-model response
  return {
    props: {
      layanan,
      mitra,
    },
  };
}

export default function Home({ layanan, mitra }) {
  return (
    <>
      <Head>
        <title>Jasa Inti Solusi Sukses</title>
        <meta
          name="description"
          content="Jasa Inti Solusi Sukses Landing Page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoipsum-223 2.svg" />
      </Head>
      <Navbar>
        <main>
          <Hero />
          <Services data={layanan.items} />
          <Questions data={layanan.items} />
		  <SliderPeople/>
          <News data={mitra.items} />
        </main>
      </Navbar>
      <div className="bg-gradient">
		<Contact />
		<Footer />
	  </div>
    </>
  );
}
