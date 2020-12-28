import Nav from '../components/nav';
import Head from 'next/head';
import style from '../styles/contact.module.css';
import { GoMail } from 'react-icons/go';
import { IconContext } from 'react-icons';

export default function Contact() {
	return (
		<>
			<Head>
				<title>Virginie Hartley | Contact</title>
			</Head>
			<Nav></Nav>
			<main>
				<section className={style.banner}>
					<h1>Contact Me</h1>
				</section>
				<section className={style.contactInfo}>
					<a href=''>
						<IconContext.Provider value={{ className: style.icon }}>
							<GoMail /> email@email.com
						</IconContext.Provider>
					</a>
				</section>
			</main>
		</>
	);
}
