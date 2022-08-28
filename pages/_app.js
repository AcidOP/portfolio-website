import Head from 'next/head';

import '../styles/globals.css'
import Appbar from './components/Appbar'
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AcidOP</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Appbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
