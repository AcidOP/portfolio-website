import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import logo from '/public/logo.png'
import Image from 'next/image'
import styles from '../../styles/appbar.module.css'

const Appbar = () => {
	const router = useRouter();
	const slug = router.pathname.split('/')[1];

	return (
		<Navbar id={styles.appbar} variant='dark' expand="lg" sticky='top' collapseOnSelect>
			<Container style={{ padding: '0.7em' }}>
				<Link href='/'><Image src={logo} width={60} height={60} alt="logo" id={styles.logo} /></Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">

						<Link href='/' passHref><Nav.Link active={!slug} className='px-3'>🚀 Home</Nav.Link></Link>
						<Link href='/about' passHref><Nav.Link active={slug === 'about'} className='px-3'>👑 About</Nav.Link></Link>
						<Link href='/contact' passHref><Nav.Link active={slug === 'contact'} className='px-3'>💌 Contact</Nav.Link></Link>

					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Appbar