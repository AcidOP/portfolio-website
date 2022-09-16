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

export async function getStaticProps({ params: { slug } }) {

  const markdown = fs.readFileSync(`./markdowns/projects/${slug}.md`, 'utf8');
  const { data, content } = matter(markdown);

  return {
    props: {
      content,
      title: data.title,
      slug: data.slug,
      description: data.description,
      keywords: data.keywords
    }
  }
}

const Project = ({ content, title, description, slug, keywords }) => {
  const router = useRouter();
  const pushToProjects = () => router.push('/projects');

  // Hydration error for some reason 😓
  const heading = title + ' | AcidOP'

  return (<>
    <Head>
      <title>{heading}</title>
      <meta name="description" content={description} />
      <meta name="description" content={description} />
      <meta name="type" content="website" />
      <meta name="keywords" content={keywords} />
      <meta name="url" content={`https://acidop.codes/${slug}`} />
      <link rel="canonical" href="https://acidop.codes/projects" />
    </Head>

    <div id={styles.container}>
      <Container className='pb-5'>
        <ReactMarkdown className='pt-3' >
          {content}
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