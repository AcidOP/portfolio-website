import Navbar from 'react-bootstrap/Navbar'
import styles from '../../styles/footer.module.css'

const Footer = () => {
	return (
		<Navbar id={styles.footer} fixed='bottom'>
			Made with 💝 and NextJS by {'\u200B'}<a href='https://github.com/AcidOP' target='_blank' rel='noreferrer'>AcidOP</a>
		</Navbar>
	)
}

export default Footer