import Nav from './nav';
import style from '../styles/gallery.module.css';

export default function GalleryLayout({ images, title }) {
	return (
		<>
			<Nav />
			<main>
				<section className={style.banner}>
					<h1>{title}</h1>
				</section>
				<section className={style.gallery}>
					{images.map((image) => {
						return (
							<div className={style.overflowContainer}>
								<img src={image.image} alt={image.alt} className={style.image} />
							</div>
						);
					})}
				</section>
			</main>
		</>
	);
}
