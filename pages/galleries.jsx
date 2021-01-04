import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/nav';
import style from '../styles/galleries.module.css';
import galleries from '../galleries/galleries';

export function getStaticProps() {
	return {
		props: {
			galleriesData: galleries,
		},
	};
}

export default function Contact({ galleriesData }) {
	return (
		<>
			<Head>
				<title>Virginie Hartley | Galleries</title>
			</Head>
			<Nav></Nav>
			<section className={style.banner}>
				<h1>Galleries</h1>
			</section>
			<main className={style.main}>
				{galleriesData.map((gallery) => {
					return (
						<Link href={`/galleries/${gallery.title}`} key={gallery.title}>
							<a className={style.link}>
								<img
									className={style.img}
									src={gallery.images[0].image}
									alt={gallery.images[0].alt}
								/>
								<div className={style.overlay}>
									<h1>{gallery.title}</h1>
								</div>
							</a>
						</Link>
					);
				})}
			</main>
		</>
	);
}
