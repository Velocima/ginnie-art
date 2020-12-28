import { useState, useEffect } from 'react';
import Nav from './nav';
import style from '../styles/gallery.module.css';

export default function GalleryLayout({ images, title }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalImage, setModalImage] = useState(images[0]);

	const handleImageClick = ({ target }) => {
		setIsModalOpen(true);
		setModalImage({ image: target.src, alt: target.alt });
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		const handleEscape = ({ key }) => {
			if (key === 'Escape') {
				setIsModalOpen(false);
			}
		};
		window.addEventListener('keydown', handleEscape);
		return () => {
			window.removeEventListener('keydown', handleEscape);
		};
	}, [isModalOpen]);

	return (
		<>
			<Nav />
			<main>
				<section
					className={style.banner}
					style={{ backgroundImage: `url('${images[0].image}')` }}
				>
					<h1>{title}</h1>
				</section>
				<section className={style.gallery}>
					{images.map((image) => {
						return (
							<div className={style.overflowContainer} key={image.image}>
								<img
									src={image.image}
									alt={image.alt}
									className={style.image}
									onClick={handleImageClick}
								/>
							</div>
						);
					})}
				</section>
				<div
					className={style.modal}
					style={{
						opacity: isModalOpen ? '1' : '0',
						pointerEvents: isModalOpen ? 'all' : 'none',
					}}
				>
					<button onClick={closeModal}>X</button>
					<img src={modalImage.image} alt={modalImage.alt} />
				</div>
			</main>
		</>
	);
}
