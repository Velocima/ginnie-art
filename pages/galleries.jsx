import Link from 'next/link';
import Nav from '../components/nav';
import style from '../styles/galleries.module.css';

export default function Contact() {
	return (
		<>
			<Nav></Nav>
			<main className={style.main}>
				<Link href='/gallery/pageone'>
					<a className={style.link}>
						<img className={style.img} src='images/gallery/wallpaper1.jpg' alt='' />
						<div className={style.overlay}>
							<p>Page One</p>
						</div>
					</a>
				</Link>
				<Link href='/gallery/pageone'>
					<a className={style.link}>
						<img className={style.img} src='images/gallery/wallpaper1.jpg' alt='' />
						<div className={style.overlay}>
							<p>Page One</p>
						</div>
					</a>
				</Link>
				<Link href='/gallery/pageone'>
					<a className={style.link}>
						<img className={style.img} src='images/gallery/wallpaper1.jpg' alt='' />
						<div className={style.overlay}>
							<p>Page One</p>
						</div>
					</a>
				</Link>
			</main>
		</>
	);
}
