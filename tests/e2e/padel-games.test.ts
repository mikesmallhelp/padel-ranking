import { test, expect, Page } from "@playwright/test";

test("test the ranking page", async ({ page }) => {
  await page.goto("https://padel-ranking.vercel.app/");
  await checkPlayerRanking({page: page, playerName: "Tommi", games: "2", points: "12"});
  await checkPlayerRanking({page: page, playerName: "Ville", games: "2", points: "12"});
  await checkPlayerRanking({page: page, playerName: "Jarkko", games: "2", points: "3"});
  await checkPlayerRanking({page: page, playerName: "Joonas", games: "2", points: "3"});
  await checkPlayerRanking({page: page, playerName: "Mika", games: "0", points: "0"});
});

const checkPlayerRanking = async ({ page, playerName, games, points }: {page: Page, playerName: string, games: string, points: string}) => {
  expect(await page.locator("data-testid=id" + playerName + "Name").textContent()).toContain(playerName);
  expect(await page.locator("data-testid=id" + playerName + "Games").textContent()).toContain(games);
  expect(await page.locator("data-testid=id" + playerName + "Points").textContent()).toContain(points);
}