import { render, screen } from "@testing-library/react";
import PadelGamesContainer from "../pages/index";
import "@testing-library/jest-dom";
import Player from "../types/Player";
import GameResult from "../types/GameResult";
import { parseISO } from "date-fns";

describe('Home', () => {
  it('check the game results', () => {
    render(<PadelGamesContainer players={players} gameResults={gameResults} />);
    checkGameResult({gameNumber: 1, createdAt: "11.02.2022 11:30", team1: "Tommi & Ville", team2: "Jarkko & Joonas", result: "6 - 2"});
    checkGameResult({gameNumber: 2, createdAt: "10.02.2022 12:32", team1: "Ville & Tommi", team2: "Joonas & Jarkko", result: "6 - 1"});
  })
})

const checkGameResult = ({gameNumber, createdAt, team1, team2, result}: {gameNumber: number, createdAt: string, team1: string, 
                                team2: string, result: string}) => {
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

