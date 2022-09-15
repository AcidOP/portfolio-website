import fs from 'fs'
import Head from 'next/head'
import matter from 'gray-matter'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import styles from '../../styles/projectPage.module.css'

export async function getStaticPaths() {

  const files = fs.readdirSync('./markdowns/projects', 'utf-8')
  const markdowns = files.filter(file => file.endsWith('.md'))

  const paths = markdowns.map(file => {
    const markdown = fs.readFileSync(`./markdowns/projects/${file}`, 'utf8');
    const { data } = matter(markdown);

    return { params: { slug: data.slug } }
  })

  return { paths, fallback: true }
}

export async function getStaticProps({params: {slug}}) {

  const markdown = fs.readFileSync(`./markdowns/projects/${slug}.md`, 'utf8');
  const { data, content } = matter(markdown);

  return {
    props: {
      data: content,
      title: data.title,
      slug: data.slug,
      description: data.description,
    }
  }
}

const Project = ({ data, title, description, slug }) => {
  const router = useRouter();
  const pushToProjects = () => router.push('/projects');

  // Hydration error for some reason 😓
  const heading = title + ' | AcidOP'

  return (<>
    <Head>
      <title>{heading}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={heading} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://acidop.codes/${slug}`} />
      <meta property="og:locale" content="en_US" />
    </Head>

    <div id={styles.container}>
      <Container className='pb-5'>
        <ReactMarkdown className='pt-3' >
          {data}
        </ReactMarkdown>
        <Button variant="outline-light" size='sm' className='mt-2 mb-5' onClick={pushToProjects}>
          Go Back 👈🏻
        </Button>
      </Container>
    </div >
  </>
  )
}


export default Project