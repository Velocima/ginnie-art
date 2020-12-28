import galleries from '../galleries/galleries';

export function getAllGalleryIds() {
	return galleries.map((gallery) => {
		return {
			params: {
				id: gallery.title,
			},
		};
	});
}

export function getGalleryData(id) {
	const galleryIndex = galleries.findIndex((gallery) => gallery.title === id);
	return {
		...galleries[galleryIndex],
	};
}
