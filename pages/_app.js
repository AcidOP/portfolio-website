import Head from 'next/head';
import { useRouter } from 'next/router';
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
      </Head>

      <Appbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
