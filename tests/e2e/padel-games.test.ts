import { test, expect, Page } from "@playwright/test";

test("test the player rankings", async ({ page, baseURL }) => {
  if (!baseURL) {
    throw Error("The base url not defined!");
  }
  
  await page.goto(baseURL);
  await checkPlayerRanking({page: page, playerName: "Tommi", games: "2", points: "12"});
  await checkPlayerRanking({page: page, playerName: "Ville", games: "2", points: "12"});
  await checkPlayerRanking({page: page, playerName: "Jarkko", games: "2", points: "3"});
  await checkPlayerRanking({page: page, playerName: "Joonas", games: "2", points: "3"});
  await checkPlayerRanking({page: page, playerName: "Mika", games: "0", points: "0"});
});

test("test the game results", async ({ page, baseURL }) => {
  if (!baseURL) {
    throw Error("The base url not defined!");
  }
  
  await page.goto(baseURL);
  await checkGameResult({page: page, gameNumber: 1, createdAt: "08.11.2022", team1: "Tommi & Ville", team2: "Jarkko & Joonas", result: "6 - 1"});
  await checkGameResult({page: page, gameNumber: 2, createdAt: "09.11.2022", team1: "Tommi & Ville", team2: "Jarkko & Joonas", result: "6 - 2"});
});

const checkPlayerRanking = async ({ page, playerName, games, points }: {page: Page, playerName: string, games: string, points: string}) => {
  expect(await page.locator("data-testid=id" + playerName + "Name").textContent()).toContain(playerName);
  expect(await page.locator("data-testid=id" + playerName + "Games").textContent()).toContain(games);
  expect(await page.locator("data-testid=id" + playerName + "Points").textContent()).toContain(points);
}

const checkGameResult = async ({ page, gameNumber, createdAt, team1, team2, result }: {
  page: Page, gameNumber: number, createdAt: string, team1: string,
  team2: string, result: string
}) => {
  const createdAtFromPage = await page.locator("data-testid=gr" + gameNumber + "CreatedAt").textContent()
  expect(createdAtFromPage?.substring(0, 10)).toContain(createdAt);
  expect(await page.locator("data-testid=gr" + gameNumber + "Team1").textContent()).toContain(team1);
  expect(await page.locator("data-testid=gr" + gameNumber + "Team2").textContent()).toContain(team2);
  expect(await page.locator("data-testid=gr" + gameNumber + "Result").textContent()).toContain(result);
}