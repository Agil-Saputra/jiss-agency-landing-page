import Head from 'next/head'

// import all components
import Navbar from '@/components/navigation/navbar'
import Hero from '@/components/hero/hero'
import Services from '@/components/services/services'
import Contact from '@/components/contact/contact'
import Footer from '@/components/footer/footer'
import Information from '@/components/information/information'




export default function Home() {
  return (
    <>
      <Head>
        <title>Jasa Inti Solusi Sukses</title>
        <meta name="description" content="Mediacare Dashboard Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoipsum-223 2.svg" />
      </Head>
      <main className='md:mx-[8.6875rem] mx-4'>
      <Navbar />
      <Hero/>
      <Services/>
	  <Information/>
      <Contact/>
      <Footer/>
      </main>
    </>
  )
}
