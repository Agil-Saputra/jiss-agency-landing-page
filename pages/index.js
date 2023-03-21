import Head from 'next/head'

// import all components
import Navbar from '@/components/navigation/navbar'
import Hero from '@/components/hero'
import Services from '@/components/services/services'
import Banner from '@/components/banner'
import Doctors from '@/components/doctors'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

// import Layout
import LayoutGradientBg from '@/components/layout/gradient'



export default function Home() {
  return (
    <>
      <Head>
        <title>Medicare</title>
        <meta name="description" content="Mediacare Dashboard Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoipsum-223 2.svg" />
      </Head>
      <main className='mx-[6.875rem]'>
      <LayoutGradientBg>
      <Navbar />
      <Hero/>
      <Banner/>
      </LayoutGradientBg>
      <Services/>
      <Doctors/>
      <Contact/>
      <Footer/>
      </main>
    </>
  )
}
