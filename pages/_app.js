import Head from 'next/head';

import '../styles/globals.css'
import Appbar from './components/Appbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AcidOP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Appbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
