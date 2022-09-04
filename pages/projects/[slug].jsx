import fs from 'fs'
import React from 'react'
import matter from 'gray-matter'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import styles from '../../styles/projectPage.module.css'

const Project = ({ data }) => {
  const router = useRouter();
  const pushToProjects = () => router.push('/projects');

  return (
    <div id={styles.container}>
      <Container>
        <Button variant="outline-light" size='sm' className='mt-3' onClick={pushToProjects}>Go Back</Button>
        <ReactMarkdown className='pt-3' >
          {data}
        </ReactMarkdown>
      </Container>
    </div >
  )
}

// export async function getStaticPaths() {

//   const files = fs.readdirSync('./markdowns/projects', 'utf-8')
//   const markdowns = files.filter(file => file.endsWith('.md'))

//   const paths = markdowns.map(file => {
//     const markdown = fs.readFileSync(`./markdowns/projects/${file}`, 'utf8');
//     const { data } = matter(markdown);

//     return {
//       params: {
//         slug: data.slug
//       }
//     }
//   })

//   return {
//     paths,
//     fallback: false
//   }
// }

// export async function getStaticProps({ params: { slug } }) {

//   const markdown = fs.readFileSync(`./markdowns/projects/${slug}.md`, 'utf8');
//   const { content } = matter(markdown);

//   return {
//     props: {
//       data: content
//     }
//   }
// }

export async function getServerSideProps({ params: { slug } }) {

  const markdown = fs.readFileSync(`./markdowns/projects/${slug}.md`, 'utf8');
  const { content } = matter(markdown);

  return {
    props: {
      data: content
    }
  }
}

export default Project