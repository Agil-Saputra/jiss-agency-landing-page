import "@/styles/globals.css";

import { IBM_Plex_Sans } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const plexSans = IBM_Plex_Sans({ 
  weight: ['400', '500', '600'],
  subsets: ["latin"] 
});

export default function App({ Component, pageProps }) {
  return (
  <main className={plexSans.className}>
    <Component {...pageProps} />
  </main>
  )
}
