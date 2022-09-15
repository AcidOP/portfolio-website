import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="My portfolio website" />
        <meta property="og:url" content="https://acidop.codes" />
        <meta property="og:site_name" content="AcidOP" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}