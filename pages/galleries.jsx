import Link from 'next/link';
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
			<Nav></Nav>
			<main className={style.main}>
				{galleriesData.map((gallery) => {
					return (
						<Link href={`/galleries/${gallery.title}`}>
							<a className={style.link}>
								<img
									className={style.img}
									src={gallery.images[0].image}
									alt={gallery.images[0].alt}
								/>
								<div className={style.overlay}>
									<p>{gallery.title}</p>
								</div>
							</a>
						</Link>
					);
				})}
			</main>
		</>
	);
}
