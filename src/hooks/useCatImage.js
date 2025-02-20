import { useState, useEffect } from 'react';

export function useCatImage({ fact }) {
	const [imageUrl, setImageUrl] = useState('');

	useEffect(() => {
		if (!fact) return;

		const firstWord = fact.split(' ').slice(0, 3).join(' ');

		const CAT_RANDOM_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red`;

		fetch(CAT_RANDOM_IMAGE_URL, { headers: { Accept: 'application/json' } })
			.then((res) => res.json())
			.then(({ url }) => {
				setImageUrl(url);
			});
	}, [fact]);

	return { imageUrl };
}
