import { useEffect, useState } from 'react';

const CAT_RANDOM_FACT_URL = 'https://catfact.ninja/fact';

export default function App() {
	const [fact, setFact] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	useEffect(() => {
		fetch(CAT_RANDOM_FACT_URL)
			.then((res) => res.json())
			.then(({ fact }) => setFact(fact));
	}, []);

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

	return (
		<main>
			<h1>Random Cat App</h1>
			{fact && <p>{fact}</p>}
			{imageUrl && <img src={imageUrl} alt={`Image rendered with first three words of ${fact}`} />}
		</main>
	);
}
