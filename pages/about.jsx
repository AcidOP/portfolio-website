import { useRouter } from "next/router"

import PageSEO from './components/PageSEO'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import styles from '../styles/about.module.css'

const About = () => {
  const router = useRouter();
  const pushToProjects = () => router.push('/projects');

  return (
    <>
      <PageSEO
        title="About | AcidOP"
        description="I'm a full stack web developer and cybersecurity enthusiast. You can read cybersecurity news and find various kind of projects here."
        keywords={['about', 'about me', 'full stack web developer', 'cybersecurity', 'cybersecurity enthusiast', 'projects', 'news']}
      />
      <div id={styles.about} >
        <Container>

          <div id={styles.hero}>
            <h2 className="pb-3">Hello There 👋</h2>

            <p className={styles.heroText}>
              I&apos;m a 17 year old self taught programmer. I love to sip coffee and cry while I am trying to code.
              Currently I&apos;m currently making discord bots for servers and making them more fun and engaging.
              <br />
            </p>

            <p className={styles.heroText}>
              In my free time I love to read books, play video games, play music, and watch movies.
              <br />
            </p>


            <h6 id={styles.heroContact}>
              Check out these cool projects I have built:
              <Button onClick={pushToProjects} variant="outline-light" size='sm' id={styles.contactButton}>Projects 🔨</Button>
              <br />
            </h6>


          </div>

        </Container>
      </div>
    </>
  )
}

export default About