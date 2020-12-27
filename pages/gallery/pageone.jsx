import Nav from '../../components/nav';
import style from '../../styles/gallery.module.css';

export default function PageOne() {
	const images = [
		{ image: '/images/gallery/wallpaper1.jpg', alt: '' },
		{ image: '/images/gallery/wallpaper2.jpg', alt: '' },
		{ image: '/images/gallery/wallpaper3.jpg', alt: '' },
		{ image: '/images/gallery/wallpaper4.jpg', alt: '' },
		{ image: '/images/gallery/wallpaper5.jpg', alt: '' },
		{ image: '/images/gallery/wallpaper6.jpg', alt: '' },
		{ image: '/images/gallery/wallpaper7.jpg', alt: '' },
		{ image: '/images/gallery/wallpaper8.jpg', alt: '' },
		{ image: '/images/gallery/wallpaper9.jpg', alt: '' },
		{ image: '/images/gallery/wallpaper10.jpg', alt: '' },
		{ image: '/images/gallery/wallpaper11.jpg', alt: '' },
		{ image: '/images/gallery/wallpaper12.jpg', alt: '' },
	];
	return (
		<>
			<Nav />
			<main>
				<section className={style.banner}>
					<h1>Page One title</h1>
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
