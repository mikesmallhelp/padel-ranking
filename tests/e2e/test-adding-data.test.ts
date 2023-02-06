import { test } from "@playwright/test";
import { checkPlayerRanking, checkPlayer } from "./test-utils";

test("test adding the new game result", async ({ page, baseURL }) => {
  if (!baseURL) {
    throw Error("The base url not defined!");
  }
  
  await page.goto(baseURL + "add-result-container");

  await page.locator("[data-testid='playerSelectJoukkue 1Pelaaja 1']").click();
  await page.getByRole("listbox").getByTestId("playerNameSelectValueJoukkue 1Pelaaja 1Joonas").click();
});

test("test adding the new player", async ({ page, baseURL }) => {
  if (!baseURL) {
    throw Error("The base url not defined!");
  }
  
  await page.goto(baseURL + "players-container");
  await page.locator("input").fill("Olli");
  await page.locator("data-testid=addPlayerButton").click();
  await checkPlayer({page: page, playerName: "Olli"});

  await page.goto(baseURL);
  await checkPlayerRanking({page: page, playerName: "Olli", games: "0", points: "0"});
});