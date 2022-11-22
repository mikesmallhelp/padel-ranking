import { render, screen } from "@testing-library/react";
import PadelGamesContainer from "../pages/index";
import "@testing-library/jest-dom";
import Player from "../types/Player"
import GameResult from "../types/GameResult"

describe('Home', () => {
  it('renders a PadelGamesContainer', () => {
    render(<PadelGamesContainer players={players} gameResults={gameResults} />)
  })
})

const players: Player[] = [
  { "id": "clasf1xr3000fi2mwfspait1l", "name": "Tommi", "games": 2, "points": 12 },
  { "id": "clasf211z000hi2mwsv81w8qc", "name": "Ville", "games": 2, "points": 12 },
  { "id": "clasf1oao000bi2mwu6re1too", "name": "Jarkko", "games": 2, "points": 3 },
  { "id": "clasf1roo000di2mw5uwo1hxn", "name": "Joonas", "games": 2, "points": 3 }]

const gameResults: GameResult[] = [
  {
    "id": "clasf367o000ni2mwjxo2w8ch",
    "createdAt": new Date(), "team1Result":
    {
      "player1Id": "clasf1xr3000fi2mwfspait1l",
      "player2Id": "clasf211z000hi2mwsv81w8qc", "points": 6, "player1":
        { "id": "clasf1xr3000fi2mwfspait1l", "name": "Tommi", "games": 2, "points": 12 }, "player2":
        { "id": "clasf211z000hi2mwsv81w8qc", "name": "Ville", "games": 2, "points": 12 }
    }, "team2Result":
    {
      "player1Id": "clasf1oao000bi2mwu6re1too",
      "player2Id": "clasf1roo000di2mw5uwo1hxn", "points": 2, "player1": {
        "id": "clasf1oao000bi2mwu6re1too",
        "name": "Jarkko", "games": 2, "points": 3
      }, "player2": { "id": "clasf1roo000di2mw5uwo1hxn", "name": "Joonas", "games": 2, "points": 3 }
    }
  },
  {
    "id": "clasf2mor000ji2mw75fte3t9",
    "createdAt": new Date(), "team1Result": {
      "player1Id": "clasf1xr3000fi2mwfspait1l",
      "player2Id": "clasf211z000hi2mwsv81w8qc", "points": 6, "player1": { "id": "clasf1xr3000fi2mwfspait1l", "name": "Tommi", "games": 2, "points": 12 },
      "player2": { "id": "clasf211z000hi2mwsv81w8qc", "name": "Ville", "games": 2, "points": 12 }
    }, "team2Result":
    {
      "player1Id": "clasf1oao000bi2mwu6re1too", "player2Id": "clasf1roo000di2mw5uwo1hxn",
      "points": 1, "player1": { "id": "clasf1oao000bi2mwu6re1too", "name": "Jarkko", "games": 2, "points": 3 }, "player2":
        { "id": "clasf1roo000di2mw5uwo1hxn", "name": "Joonas", "games": 2, "points": 3 }
    }
  }]

