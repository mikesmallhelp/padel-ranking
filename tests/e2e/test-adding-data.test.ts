import { test, Page } from "@playwright/test";
import { checkPlayerRanking, checkPlayer, checkGameResult, authenticate } from "./test-utils";
import { format } from "date-fns";

test("test adding the new game result", async ({ page, baseURL }) => {
  await checkBaseUrlAndDoAuthentication({ page: page, baseURL: baseURL, contextPath: "add-result-container" });

  await addTeamResult({ page: page, teamNumber: "1", player1Name: "Tommi", player2Name: "Ville", points: "6" });
  await addTeamResult({ page: page, teamNumber: "2", player1Name: "Jarkko", player2Name: "Joonas", points: "3" });
  await page.getByTestId("addGameResultButton").click();

  await checkPlayerRanking({ page: page, playerName: "Tommi", games: "3", points: "18" });
  await checkPlayerRanking({ page: page, playerName: "Ville", games: "3", points: "18" });
  await checkPlayerRanking({ page: page, playerName: "Jarkko", games: "3", points: "6" });
  await checkPlayerRanking({ page: page, playerName: "Joonas", games: "3", points: "6" });
  await checkGameResult({
    page: page, createdAt: format(new Date(), "dd.MM.yyyy"),
    team1: "Tommi & Ville", team2: "Jarkko & Joonas", result: "6 - 3"
  });
});

test("test adding the new player", async ({ page, baseURL }) => {
  await checkBaseUrlAndDoAuthentication({ page: page, baseURL: baseURL, contextPath: "players-container" });

  await page.locator("input").fill("Olli");
  await page.locator("data-testid=addPlayerButton").click();
  await checkPlayer({ page: page, playerName: "Olli" });

  await page.goto(baseURL!);
  await checkPlayerRanking({ page: page, playerName: "Olli", games: "0", points: "0" });
});

const checkBaseUrlAndDoAuthentication = async ({ page, baseURL, contextPath }: { page: Page, baseURL?: string, contextPath: string }) => {
  if (!baseURL) {
    throw Error("The base url not defined!");
  }

  // we have to first go to the base url, because only this works in the Vercel environment
  await page.goto(baseURL);
  await authenticate({ page: page, username: process.env.AUTH0_E2E_TEST_USERNAME, password: process.env.AUTH0_E2E_TEST_PASSWORD });
  await page.goto(baseURL + contextPath);
}

const addTeamResult = async ({ page, teamNumber, player1Name, player2Name, points }:
  { page: Page, teamNumber: string, player1Name: string, player2Name: string, points: string }) => {
  await selectPlayer({ page: page, teamNumber: teamNumber, playerNumber: "1", playerName: player1Name });
  await selectPlayer({ page: page, teamNumber: teamNumber, playerNumber: "2", playerName: player2Name });
  await selectPoints({ page: page, teamNumber: teamNumber, points: points });
}

const selectPlayer = async ({ page, teamNumber, playerNumber, playerName }: { page: Page, teamNumber: string, playerNumber: string, playerName: string }) => {
  await page.getByTestId("playerSelectJoukkue " + teamNumber + "Pelaaja " + playerNumber).click();
  await page.getByRole("listbox").getByTestId("playerNameSelectValueJoukkue " + teamNumber + "Pelaaja " + playerNumber + playerName).click();
}

const selectPoints = async ({ page, teamNumber, points }: { page: Page, teamNumber: string, points: string }) => {
  await page.getByTestId("pointsSelectJoukkue " + teamNumber + "Pisteet").click();
  await page.getByRole("listbox").getByTestId("pointsSelectValueJoukkue " + teamNumber + "Pisteet" + points).click();
}