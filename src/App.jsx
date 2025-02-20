import { useCatImage } from './hooks/useCatImage.js';
import { useCatFact } from './hooks/useCatFact.js';

export default function App() {
	const { fact, refreshFact } = useCatFact();
	const { imageUrl } = useCatImage({ fact });

	return (
		<main>
			<h1>Random Cat App</h1>
			<button onClick={refreshFact}>Get new fact</button>
			{fact && <p>{fact}</p>}
			{imageUrl && <img src={imageUrl} alt={`Image rendered with first three words of ${fact}`} />}
		</main>
	);
}
