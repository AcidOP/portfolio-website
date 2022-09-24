import Image from "next/image"
import { useRouter } from "next/router"
import PageSEO from "./components/PageSEO"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

import codingLogo from '../public/coding.png'
import styles from '../styles/index.module.css'

export default function Home() {
  const router = useRouter();
  const pushToAbout = () => router.push('/about');

  return (
    <>
      <PageSEO
        title="Home | AcidOP"
        description="This is my personal website where I write articles and share my journey with everyone."
        keywords={['AcidOP', 'personal', 'website', 'tech', 'blog']}
      />
      <div id={styles.homepage}>
        <Container id={styles.homeContainer}>
          <div id={styles.hero}>
            <Image src={codingLogo} width={200} height={200} alt="logo" id={styles.codeLogo} placeholder="blur" />
            <div id={styles.intro}>
              <h1 id={styles.heading}>Hi, I&apos;m {' '}<span id={styles.title}>AcidOP</span></h1>
              <h6 id={styles.heroText}>I&apos;m a Tech Enthusiast and a High School student.</h6>
              <Button className="mt-3" onClick={pushToAbout} size='sm' variant="outline-light">Read More 📖</Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}