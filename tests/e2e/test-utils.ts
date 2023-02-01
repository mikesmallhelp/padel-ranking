import { expect, Page } from "@playwright/test";

export const checkPlayerRanking = async ({ page, playerName, games, points }: { page: Page, playerName: string, games: string, points: string }) => {
    expect(await page.locator("data-testid=id" + playerName + "Name").textContent()).toContain(playerName);
    expect(await page.locator("data-testid=id" + playerName + "Games").textContent()).toContain(games);
    expect(await page.locator("data-testid=id" + playerName + "Points").textContent()).toContain(points);
}

export const checkGameResult = async ({ page, gameNumber, createdAt, team1, team2, result }: {
    page: Page, gameNumber: number, createdAt: string, team1: string,
    team2: string, result: string
}) => {
    const createdAtFromPage = await page.locator("data-testid=gr" + gameNumber + "CreatedAt").textContent()
    expect(createdAtFromPage?.substring(0, 10)).toContain(createdAt);
    expect(await page.locator("data-testid=gr" + gameNumber + "Team1").textContent()).toContain(team1);
    expect(await page.locator("data-testid=gr" + gameNumber + "Team2").textContent()).toContain(team2);
    expect(await page.locator("data-testid=gr" + gameNumber + "Result").textContent()).toContain(result);
}

export const checkPlayer = async ({ page, playerName }: { page: Page, playerName: string }) => {
    expect(await page.locator("data-testid=" + playerName + "Name").textContent()).toContain(playerName);
}