import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"

import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

import codingLogo from '../public/coding.png'
import styles from '../styles/index.module.css'

export default function Home() {
  const router = useRouter();
  const pushToAbout = () => router.push('/about');

  return (
    <>
      <Head>
        <title>Home | AcidOP</title>
        <meta name="url" content="https://acidop.codes" />
        <meta name="description" content="My Portfolio Website where I showcase my skills and my tech projects. I am also interested in cybersecurity and I am actively learning about it." />
        <meta name="keywords" content="portfolio, portfolio website" />
        <meta name="author" content="AcidOP" />
        <meta name="og:description" content="My Portfolio Website where I showcase my skills and my tech projects. I am also interested in cybersecurity and I am actively learning about it." />
        <meta name="og:url" content="https://acidop.codes" />
        <meta name="og:type" content="website" />

        <link rel="canonical" href="https://acidop.codes" />
      </Head>
      <div id={styles.homepage}>
        <Container id={styles.homeContainer}>
          <div id={styles.hero}>
            <Image src={codingLogo} width={200} height={200} alt="logo" id={styles.codeLogo} placeholder="blur" />
            <div id={styles.intro}>
              <h1 id={styles.heading}>Hi, I&apos;m {' '}<span id={styles.title}>AcidOP</span></h1>
              <p id={styles.heroText}>I&apos;m a Tech Enthusiast and a High School student.</p>
              <Button onClick={pushToAbout} size='sm' variant="outline-light">Read More 📖</Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}