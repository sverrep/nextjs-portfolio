import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { Space_Grotesk } from "next/font/google"
import Head from 'next/head'

const font = Space_Grotesk({
  subsets: ["latin"],
  variable: " --font-grot"
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="widt-device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={`${font.variable} font-grot bg-light w-full min-h-screen`}>
        <NavBar/>
        <Component {...pageProps} />
      </main>
    </>
  )
}
