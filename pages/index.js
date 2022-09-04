import Image from "next/image"
import { useRouter } from "next/router"

import Footer from './components/Footer'

import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

import codingLogo from '../public/coding.png'
import styles from '../styles/index.module.css'

export default function Home() {
  const router = useRouter();
  const pushToAbout = () => router.push('/about');

  return (
    <div id={styles.homepage}>
      <Container id={styles.homeContainer}>
        <div id={styles.hero}>
          <Image src={codingLogo} width={200} height={200} alt="logo" id={styles.codeLogo} />
          <div id={styles.intro}>
            <h1 id={styles.heading}>Hi, I&apos;m {' '}<span id={styles.title}>AcidOP</span></h1>
            <p id={styles.heroText}>I&apos;m a Tech Enthusiast and a High School student.</p>
            <Button onClick={pushToAbout} size='sm' variant="outline-light">Read More 📖</Button>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}