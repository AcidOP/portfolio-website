import fs from 'fs'
import Head from 'next/head'
import { useState } from 'react'
import matter from 'gray-matter'
import { useRouter } from 'next/router'

import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import styles from '../../styles/projects.module.css'
import cardStyle from '../../styles/projectCard.module.css'

const Projects = ({ projects }) => {
  const router = useRouter();
  const pushToContact = () => router.push('/contact')
  const [show, setShow] = useState(false);
  
  const ProjectCard = ({project}) => {
    const pushToProjectPage = () => {
      router.push(`/projects/${project.slug}`)
      setShow(true)
    }
    return <Card className={cardStyle.myCard} onClick={pushToProjectPage}>
      <div className={cardStyle.container}>
        <Card.Text>{project.date}</Card.Text>
        <div className={cardStyle.body}>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
        </div>
      </div>
    </Card>
  }

  return (
    <>
    <Head>
      <meta name="description" content="Here are some awesome projects which I've worked on." />
      <meta name="keywords" content="projects, web development, web apps, web design, web development projects, web development apps, web development design, javascript, typescript, python, cybersecurity, hacking, programming" />
    </Head>
    <div id={styles.projectPage}>
      <Container>

        {
          show ? <Spinner animation="border" role="status" /> : ""
        }

        <h1>Projects: </h1>
        {
          projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        }

        <div id={styles.invite}>
          Come lets talk:
          <Button size='sm' className='mb-5' variant="outline-light" onClick={pushToContact} style={{ width: '6rem', marginTop: '1rem' }}>
            Contact 💌
          </Button>
        </div>

      </Container>
    </div>
    </>
  )
}

export async function getStaticProps() {

  const files = fs.readdirSync('./markdowns/projects', 'utf-8')
  const markdowns = files.filter(file => file.endsWith('.md'))

  let frontmatter = markdowns.map(file => {
    const markdown = fs.readFileSync(`./markdowns/projects/${file}`, 'utf8');
    const { data } = matter(markdown);

    return { ...data }

  })


  // Sort the projects by date -> latest first
  frontmatter = frontmatter.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })

  // Change the date syntax DD/MM/YYYY
  frontmatter = frontmatter.map(project => {

    const date = project.date.split('-')

    const year = date[0]
    const month = date[1]
    const day = date[2]

    project.date = `${day}/${month}/${year}`
    return project
  })

  return {
    props: {
      projects: frontmatter
    }
  }
}

export default Projects