import { expect, Page } from "@playwright/test";

export const authenticate = async ({ page, username, password }: { page: Page, username?: string, password?: string }) => {
    if (!username) {
        throw Error("The username not defined!");
    }
    if (!password) {
        throw Error("The password not defined!");
    }

    await page.getByLabel("Email address").fill("keith.reknan@gmail.com");
    await page.getByLabel("Password").fill(password);
    await page.locator('button[name="action"]').click();
}

export const checkPlayerRanking = async ({ page, playerName, games, points }: { page: Page, playerName: string, games: string, points: string }) => {
    expect(await page.locator("data-testid=" + playerName + "Name").textContent()).toContain(playerName);
    expect(await page.locator("data-testid=" + playerName + "Games").textContent()).toContain(games);
    expect(await page.locator("data-testid=" + playerName + "Points").textContent()).toContain(points);
}

export const checkGameResult = async ({ page, createdAt, team1, team2, result }: {
    page: Page, createdAt: string, team1: string,
    team2: string, result: string
}) => {
    const createdAtFromPage = await page.locator("data-testid=" + "gameResult" + createdAt + "CreatedAt").textContent()
    expect(createdAtFromPage?.substring(0, 10)).toContain(createdAt);
    expect(await page.locator("data-testid=gameResult" + createdAt + "Team1").textContent()).toContain(team1);
    expect(await page.locator("data-testid=gameResult" + createdAt + "Team2").textContent()).toContain(team2);
    expect(await page.locator("data-testid=gameResult" + createdAt + "Result").textContent()).toContain(result);
}

export const checkPlayer = async ({ page, playerName }: { page: Page, playerName: string }) => {
    expect(await page.locator("data-testid=" + playerName + "Name").textContent()).toContain(playerName);
}