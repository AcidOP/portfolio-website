import React from 'react'

import styles from '../../styles/footer.module.css'
import Navbar from 'react-bootstrap/Navbar'

const Footer = () => {
	return (
		<Navbar id={styles.footer}>
			Made with 💝 by <a href='https://github.com/AcidOP' target='_blank' rel='noreferrer'>AcidOP</a>
		</Navbar>
	)
}

export default Footer