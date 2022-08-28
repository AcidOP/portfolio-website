import React from 'react'
import { useRouter } from "next/router"

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import styles from '../styles/about.module.css'

const About = () => {
  const router = useRouter();

  const pushToContact = () => router.push('/contact');

  return (
    <div id={styles.about} >
      <Container style={{ height: '100vh' }}>

        <div id={styles.hero}>
          <h2>Hello There 👋</h2>

          <p className={styles.heroText}>
            I&apos;m a 17 year old self taught programmer. I love to sip coffee and cry while I am trying to code.
            Currently I&apos;m learning about malware development with C# and tiny little bit of cybersecurity.
            <br />
          </p>

          <p className={styles.heroText}>
            In my free time I love to read books, play video games, play music, and watch movies.
            <br />
          </p>


          <p id={styles.heroContact}>
            Here&apos;s how you can find me:
            <Button onClick={pushToContact} variant="outline-light" size='sm' id={styles.contactButton}>Contact 🤳</Button>
            <br />
          </p>


        </div>

      </Container>
    </div>
  )
}

export default About