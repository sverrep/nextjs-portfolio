import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='bg-light scroll-smooth'>
      <Head />
      <body className='scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primaryLight/80'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
