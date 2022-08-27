import React from 'react'
import { useRouter } from 'next/router'

import Button from 'react-bootstrap/Button'
import styles from '../styles/404.module.css'

const FourOhFour = () => {
	const router = useRouter();
	const pushToHome = () => router.push('/');

	return (
		<div id={styles.lostContainer}>
			<h3>404 | Page not found 😢</h3>
			<h4>Are you lost?</h4>
			<Button onClick={pushToHome} variant="outline-light" className='mt-5' style={{maxWidth: '10rem'}}>
				Come Home 🙋‍♂️
			</Button>
		</div>
	)
}

export default FourOhFour