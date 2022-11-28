import { render, screen } from "@testing-library/react";
import PadelGamesContainer from "../pages/index";
import "@testing-library/jest-dom";
import Player from "../types/Player"
import GameResult from "../types/GameResult"

describe('Home', () => {
  it('check the game results', () => {
    render(<PadelGamesContainer players={players} gameResults={gameResults} />);
    checkGameResult({gameNumber: 1, team1: "Tommi & Ville", team2: "Jarkko & Joonas", result: "6 - 2"});
    checkGameResult({gameNumber: 2, team1: "Ville & Tommi", team2: "Joonas & Jarkko", result: "6 - 2"});
  })
})

const checkGameResult = ({gameNumber, team1, team2, result}: {gameNumber: number, team1: string, team2: string, result: string}) => {
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
    "createdAt": new Date(), 
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
    "createdAt": new Date(), 
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

