import Head from 'next/head';
import Nav from '../components/nav';
import style from '../styles/index.module.css';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Virginie Hartley</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Nav />
			<main>
				<section class={style.banner}>
					<h1>Virginie Hartley</h1>
					<h2>Artist</h2>
					<h2>Illustrator</h2>
				</section>
				<section class={style.about}>
					<img src='images/profile.jpg' alt='Artist and illustrator Virginnie Hartley' />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, beatae
						odio mollitia fuga inventore dolore error eos sapiente blanditiis architecto
						ipsum voluptates expedita. Inventore repudiandae impedit perspiciatis cum,
						expedita quas. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Laborum autem soluta reprehenderit, numquam corporis nam esse dolore
						veritatis cum earum dolorum, voluptates libero itaque eaque! Enim quibusdam
						sapiente dolores deleniti?
					</p>
				</section>
			</main>
		</div>
	);
}
