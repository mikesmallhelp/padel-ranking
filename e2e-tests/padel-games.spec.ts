import { test, expect } from '@playwright/test';

test('the padel games smoke test', async ({ page }) => {
  await page.goto('https://padel-ranking.vercel.app/');

  expect(await page.locator('data-testid=dashboardTitle').textContent()).toBe("Padel-pelixxxxxt");
});
