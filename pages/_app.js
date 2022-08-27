import '../styles/globals.css'
import Appbar from './components/Appbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Appbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
