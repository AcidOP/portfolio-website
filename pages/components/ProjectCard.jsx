import React from 'react'
import { useRouter } from 'next/router'

import Card from 'react-bootstrap/Card'

import styles from '../../styles/projectCard.module.css'

const ProjectCard = ({ project }) => {
  const router = useRouter();
  const pushToProject = () => router.push(`/projects/${project.slug}`)

  return (
    <Card className={styles.myCard} onClick={pushToProject}>
      <div className={styles.container}>
        <Card.Text>{project.date}</Card.Text>
        <div className={styles.body}>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard