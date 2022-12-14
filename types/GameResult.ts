import TeamResult from "./TeamResult";

type GameResult = {
    id: string;
    team1Result: TeamResult;
    team2Result: TeamResult;
    createdAt: Date;
}

export default GameResult;