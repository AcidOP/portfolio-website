import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import '../styles/globals.css'
import Appbar from './components/Appbar'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  const page = pathname.slice(1) .charAt(0).toUpperCase() + pathname.slice(2)
  const title = pathname === '/' ? 'Home | AcidOP' : page + ' | AcidOP'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="AcidOP" />
      </Head>

      <Script src="https://api.acidop.codes/latest.js"  />

      <Appbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
