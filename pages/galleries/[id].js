import Head from 'next/head';
import GalleryLayout from '../../components/galleryLayout';
import { getAllGalleryIds, getGalleryData } from '../../lib/gallery';

export function getStaticProps({ params }) {
	const postData = getGalleryData(params.id);
	return {
		props: {
			postData,
		},
	};
}

export function getStaticPaths() {
	const paths = getAllGalleryIds();
	return {
		paths,
		fallback: false,
	};
}

export default function Gallery({ postData }) {
	return (
		<>
			<Head>
				<title>{`Virginie Hartley | Galleries | ${postData.title}`}</title>
			</Head>
			<GalleryLayout images={postData.images} title={postData.title} />
		</>
	);
}
