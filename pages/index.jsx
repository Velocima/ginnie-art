import Head from 'next/head';
import Nav from '../components/nav';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Virginnie Hartley</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Nav></Nav>
			<main>
				<h1>Virginnie Hartley</h1>
				<h2>Artist</h2>
				<h2>Illustrators</h2>
			</main>
		</div>
	);
}
