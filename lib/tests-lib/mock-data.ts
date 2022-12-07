import Player from "../../types/Player";
import GameResult from "../../types/GameResult";
import { parseISO } from "date-fns";

export const players: Player[] = [
    { "id": "idTommi", "name": "Tommi", "games": 2, "points": 12 },
    { "id": "idVille", "name": "Ville", "games": 2, "points": 12 },
    { "id": "idJarkko", "name": "Jarkko", "games": 2, "points": 3 },
    { "id": "idJoonas", "name": "Joonas", "games": 2, "points": 3 },
    { "id": "idMika", "name": "Mika", "games": 0, "points": 0 }
]

export const playersSmallSet: Player[] = [
    { "id": "idTommi", "name": "Tommi", "games": 2, "points": 12 },
    { "id": "idVille", "name": "Ville", "games": 2, "points": 12 }
]

export const gameResults: GameResult[] = [
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