import { render, screen } from "@testing-library/react";
import PadelGamesContainer from "../pages/index";
import "@testing-library/jest-dom";
import Player from "../types/Player";
import GameResult from "../types/GameResult";
import { parseISO } from "date-fns";

describe('index.tsx', () => {
  it('check the ranking', () => {
    render(<PadelGamesContainer players={players} gameResults={gameResults} />);

    checkDashboard();
    checkRankingTitles();

    checkPlayerRanking({playerName: "Tommi", games: "2", points: "12"});
    checkPlayerRanking({playerName: "Ville", games: "2", points: "12"});
    checkPlayerRanking({playerName: "Jarkko", games: "2", points: "3"});
    checkPlayerRanking({playerName: "Joonas", games: "2", points: "3"});
    checkPlayerRanking({playerName: "Mika", games: "0", points: "0"});
  })  

  it('check the game results', () => {
    render(<PadelGamesContainer players={players} gameResults={gameResults} />);
    
    checkGameResultsTitles();
    checkGameResult({gameNumber: 1, createdAt: "11.02.2022 11:30", team1: "Tommi & Ville", team2: "Jarkko & Joonas", result: "6 - 2"});
    checkGameResult({gameNumber: 2, createdAt: "10.02.2022 12:32", team1: "Ville & Tommi", team2: "Joonas & Jarkko", result: "6 - 1"});
  })
})

const checkDashboard = () => {
  expect(screen.getByTestId("dashboardTitle").textContent).toContain("Padel-pelit");
  expect(screen.getByTestId("menuPadelGames").textContent).toContain("Padel-pelit");
  expect(screen.getByTestId("menuAddResult").textContent).toContain("Lisää tulos");
  expect(screen.getByTestId("menuPlayers").textContent).toContain("Pelaajat");
}

const checkRankingTitles = () => {
  expect(screen.getByTestId("rankingTitle").textContent).toContain("Ranking");
  expect(screen.getByTestId("rankingColumnTitleName").textContent).toContain("Nimi");
  expect(screen.getByTestId("rankingColumnTitleGames").textContent).toContain("Pelit");
  expect(screen.getByTestId("rankingColumnTitlePoints").textContent).toContain("Pisteet");
}

const checkPlayerRanking = ({ playerName, games, points }: {playerName: string, games: string, points: string}) => {
  expect(screen.getByTestId("id" + playerName + "name").textContent).toContain(playerName);
  expect(screen.getByTestId("id" + playerName + "games").textContent).toContain(games);
  expect(screen.getByTestId("id" + playerName + "points").textContent).toContain(points);
}

const checkGameResultsTitles = () => {
  expect(screen.getByTestId("gameResultsTitle").textContent).toContain("Tulokset");
  expect(screen.getByTestId("gameResultsColumnTitleTime").textContent).toContain("Aika");
  expect(screen.getByTestId("gameResultsColumnTitleTeam1").textContent).toContain("Joukkue 1");
  expect(screen.getByTestId("gameResultsColumnTitleTeam2").textContent).toContain("Joukkue 2");
  expect(screen.getByTestId("gameResultsColumnTitleResult").textContent).toContain("Tulos");
}

const checkGameResult = ({ gameNumber, createdAt, team1, team2, result }: {
  gameNumber: number, createdAt: string, team1: string,
  team2: string, result: string
}) => {
  expect(screen.getByTestId("gameResult" + gameNumber + "createdAt").textContent).toContain(createdAt);
  expect(screen.getByTestId("gameResult" + gameNumber + "team1").textContent).toContain(team1);
  expect(screen.getByTestId("gameResult" + gameNumber + "team2").textContent).toContain(team2);
  expect(screen.getByTestId("gameResult" + gameNumber + "result").textContent).toContain(result);
}

const players: Player[] = [
  { "id": "idTommi", "name": "Tommi", "games": 2, "points": 12 },
  { "id": "idVille", "name": "Ville", "games": 2, "points": 12 },
  { "id": "idJarkko", "name": "Jarkko", "games": 2, "points": 3 },
  { "id": "idJoonas", "name": "Joonas", "games": 2, "points": 3 },
  { "id": "idMika", "name": "Mika", "games": 0, "points": 0 }
]

const gameResults: GameResult[] = [
  {
    "id": "gameResult1",
    "createdAt": parseISO('2022-02-11T11:30:30'),
    "team1Result":
    {
      "player1Id": "idTommi",
      "player2Id": "idVille", "points": 6, "player1":
        { "id": "idTommi", "name": "Tommi", "games": 2, "points": 12 }, "player2":
        { "id": "idVille", "name": "Ville", "games": 2, "points": 12 }
    },
    "team2Result":
    {
      "player1Id": "idJarkko",
      "player2Id": "IdJoonas", "points": 2, "player1": {
        "id": "idJarkko",
        "name": "Jarkko", "games": 2, "points": 3
      }, "player2": { "id": "idJoonas", "name": "Joonas", "games": 2, "points": 3 }
    }
  },
  {
    "id": "gameResult2",
    "createdAt": parseISO('2022-02-10T12:32:32'),
    "team1Result":
    {
      "player1Id": "idVille",
      "player2Id": "idTommi", "points": 6, "player1":
        { "id": "idVille", "name": "Ville", "games": 2, "points": 12 }, "player2":
        { "id": "idTommi", "name": "Tommi", "games": 2, "points": 12 }
    },
    "team2Result":
    {
      "player1Id": "idJoonas",
      "player2Id": "IdJarkko", "points": 1, "player1": {
        "id": "idJoonas",
        "name": "Joonas", "games": 2, "points": 3
      }, "player2": { "id": "idJarkko", "name": "Jarkko", "games": 2, "points": 3 }
    }
  }
]

