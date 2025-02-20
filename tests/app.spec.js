import { test, expect } from '@playwright/test';

process.loadEnvFile();

const { LOCALHOST_URL, CAT_IMAGE_PREFIX } = process.env;

test('app shows random fact', async ({ page }) => {
	await page.goto(LOCALHOST_URL);

	const text = await page.getByRole('paragraph');

	const textContent = await text.textContent();

	await expect(textContent?.length).toBeGreaterThan(0);
});

test('app shows cat image', async ({ page }) => {
	await page.goto(LOCALHOST_URL);

	const image = await page.getByRole('img');

	const source = await image.getAttribute('src');

	await expect(source?.startsWith(CAT_IMAGE_PREFIX)).toBeTruthy();
});
