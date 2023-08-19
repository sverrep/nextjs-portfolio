import Layout from '@/components/Layout'
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
        <meta name="viewport" content="width-device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout className="pt-2 lg:pt-0 bg-light">
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
