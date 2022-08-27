import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import instagram from '../public/instagram.png'
import github from '../public/github.png'
import reddit from '../public/reddit.png'
import styles from '../styles/contact.module.css'

const Contact = () => {
  const router = useRouter();

  const pushToHome = () => router.push('/');

  return (
    <div id={styles.contactPage}>

      <Container>

        <h2>Contact 📨</h2>

        <Form id={styles.contactForm} className='pt-3'>

          <Row className='pt-2'>

            <Col className={styles.imageColumn}>
              <Image src={instagram} width={50} height={50} alt='instagram' />
            </Col>

            <Col className={styles.linkColumn}>
              <a className={styles.anchor} href="https://instagram.com/whynotacid">whynotacid</a>
            </Col>

          </Row>

          <Row className='pt-2'>

            <Col className={styles.imageColumn}>
              <Image src={github} width={50} height={50} alt='github' />
            </Col>

            <Col className={styles.linkColumn}>
              <a className={styles.anchor} href="https://github.com/AcidOP">AcidOP</a>
            </Col>

          </Row>

          <Row className='pt-2'>

            <Col className={styles.imageColumn}>
              <Image src={reddit} width={50} height={50} alt='reddit' />
            </Col>

            <Col className={styles.linkColumn}>
              <a className={styles.anchor} href="https://www.reddit.com/user/AcidOP_69">AcidOP_69</a>
            </Col>

          </Row>

          <Button onClick={pushToHome} variant='outline-light' size='sm' className='mt-4'>Go Back 🔙</Button>

        </Form>


      </Container>

    </div>
  )
}

export default Contact