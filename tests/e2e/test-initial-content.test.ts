import { test } from "@playwright/test";
import { checkPlayerRanking, checkGameResult, checkPlayer, authenticate } from "./test-utils";

test("test the player rankings", async ({ page, baseURL }) => {
  if (!baseURL) {
    throw Error("The base url not defined!");
  }
  
  await page.goto(baseURL);
  await authenticate({page: page, password: process.env.E2E_TEST_PASSWORD});

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
  await authenticate({page: page, password: process.env.E2E_TEST_PASSWORD});

  await checkGameResult({page: page, createdAt: "08.11.2022", team1: "Tommi & Ville", team2: "Jarkko & Joonas", result: "6 - 1"});
  await checkGameResult({page: page, createdAt: "09.11.2022", team1: "Tommi & Ville", team2: "Jarkko & Joonas", result: "6 - 2"});
});

test("test the players", async ({ page, baseURL }) => {
  if (!baseURL) {
    throw Error("The base url not defined!");
  }
  
  await page.goto(baseURL + "players-container");
  await authenticate({page: page, password: process.env.E2E_TEST_PASSWORD});

  await checkPlayer({page: page, playerName: "Jarkko"});
  await checkPlayer({page: page, playerName: "Joonas"});
  await checkPlayer({page: page, playerName: "Mika"});
  await checkPlayer({page: page, playerName: "Tommi"});
  await checkPlayer({page: page, playerName: "Ville"});
});