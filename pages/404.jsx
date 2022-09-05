import { useRouter } from 'next/router'

import Button from 'react-bootstrap/Button'
import styles from '../styles/404.module.css'

const FourOhFour = () => {
	const router = useRouter();
	const pushToHome = () => router.push('/');

	return (
		<div id={styles.lostContainer}>
			<h3>You seem to have lost your way</h3>
			<h6>Let me take you home 😊</h6>
			<Button onClick={pushToHome} variant="outline-light" className='mt-5' size='sm'>
				Come Home 🙋‍♂️
			</Button>
		</div>
	)
}

export default FourOhFour