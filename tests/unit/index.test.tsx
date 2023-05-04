import { render, screen } from "@testing-library/react";
import PadelGamesContainer from "../../pages/index";
import "@testing-library/jest-dom";
import { players, gameResults } from "../../lib/tests-lib/mock-data";
import { checkDashboard } from "../../lib/tests-lib/common-test-utils";
import { UserProvider } from "@auth0/nextjs-auth0/client";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("@auth0/nextjs-auth0/client", () => ({ UserProvider: ({ children }: { children: JSX.Element }) => (<div>{children}</div>),
                                                 useUser: () => {
                                                    return {
                                                        user: {name: "testName"},
                                                        error: null,
                                                        isLoading: false,
                                                    }
                                                  }
                                               }
));

describe("index.tsx", () => {
  it("check the dashboard", () => {
    render(<UserProvider><PadelGamesContainer players={players} gameResults={gameResults} /></UserProvider>);
    checkDashboard({dashboardTitle: "Padel-pelit"});
  })

  it("check the ranking", () => {
    render(<UserProvider><PadelGamesContainer players={players} gameResults={gameResults} /></UserProvider>);

    checkRankingTitles();

    checkPlayerRanking({playerName: "Tommi", games: "2", points: "12"});
    checkPlayerRanking({playerName: "Ville", games: "2", points: "12"});
    checkPlayerRanking({playerName: "Jarkko", games: "2", points: "3"});
    checkPlayerRanking({playerName: "Joonas", games: "2", points: "3"});
    checkPlayerRanking({playerName: "Mika", games: "0", points: "0"});
  })  

  it("check the game results", () => {
    render(<UserProvider><PadelGamesContainer players={players} gameResults={gameResults} /></UserProvider>);
    
    checkGameResultsTitles();
    checkGameResult({gameNumber: 1, createdAt: "11.02.2022", team1: "Tommi & Ville", team2: "Jarkko & Joonas", result: "6 - 2"});
    checkGameResult({gameNumber: 2, createdAt: "10.02.2022", team1: "Ville & Tommi", team2: "Joonas & Jarkko", result: "6 - 1"});
  })
})

const checkRankingTitles = () => {
  expect(screen.getByTestId("rankingTitle").textContent).toContain("Ranking");
  expect(screen.getByTestId("rankingColumnTitleName").textContent).toContain("Nimi");
  expect(screen.getByTestId("rankingColumnTitleGames").textContent).toContain("Pelit");
  expect(screen.getByTestId("rankingColumnTitlePoints").textContent).toContain("Pisteet");
}

const checkPlayerRanking = ({ playerName, games, points }: {playerName: string, games: string, points: string}) => {
  expect(screen.getByTestId(playerName + "Name").textContent).toContain(playerName);
  expect(screen.getByTestId(playerName + "Games").textContent).toContain(games);
  expect(screen.getByTestId(playerName + "Points").textContent).toContain(points);
}

const checkGameResultsTitles = () => {
  expect(screen.getByTestId("gameResultsTitle").textContent).toContain("Tulokset");
  expect(screen.getByTestId("gameResultsColumnTitleTime").textContent).toContain("Aika");
  expect(screen.getByTestId("gameResultsColumnTitleTeam1").textContent).toContain("Joukkue 1");
  expect(screen.getByTestId("gameResultsColumnTitleTeam2").textContent).toContain("Joukkue 2");
  expect(screen.getByTestId("gameResultsColumnTitleResult").textContent).toContain("Tulos");
}

const checkGameResult = ({ createdAt, team1, team2, result }: {
  gameNumber: number, createdAt: string, team1: string,
  team2: string, result: string
}) => {
  expect(screen.getByTestId("gameResult" + createdAt + "CreatedAt").textContent).toContain(createdAt);
  expect(screen.getByTestId("gameResult" + createdAt + "Team1").textContent).toContain(team1);
  expect(screen.getByTestId("gameResult" + createdAt + "Team2").textContent).toContain(team2);
  expect(screen.getByTestId("gameResult" + createdAt + "Result").textContent).toContain(result);
}

