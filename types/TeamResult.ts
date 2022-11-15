import Player from "./Player";

export type TeamResult = {
    player1Id: string;
    player2Id: string;
    player1?:   Player;
    player2?:   Player;
    points: number;
}