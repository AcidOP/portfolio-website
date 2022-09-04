import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/globals.css'
import Appbar from './components/Appbar'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  const sub = pathname === '/' ? 'AcidOP' : pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)
  const title = (sub === 'AcidOP') ? 'Home | ' + sub : sub + ' | AcidOP'

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Appbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
