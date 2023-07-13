import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IBM_Plex_Sans } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const plexSans = IBM_Plex_Sans({ 
  weight: ['400', '500', '600', '700', '300'],
  subsets: ["latin"] 
});

export default function App({ Component, pageProps }) {
  return (
  <main className={plexSans.className}>
    <Component {...pageProps} />
  </main>
  )
}
