const CAT_RANDOM_FACT_URL = 'https://catfact.ninja/fact';

export const getRandomFact = async () => {
	const res = await fetch(CAT_RANDOM_FACT_URL);
	const { fact } = await res.json();
	return fact;
};
