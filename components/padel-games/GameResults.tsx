import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../dashboard/Title";
import GameResult from "../../types/GameResult";
import { format } from "date-fns";

const GameResults = ({ gameResults }: { gameResults: GameResult[] }) => {
  return (
    <React.Fragment>
      <Title titleTestId="gameResultsTitle">Tulokset</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell data-testid="gameResultsColumnTitleTime">Aika</TableCell>
            <TableCell data-testid="gameResultsColumnTitleTeam1">Joukkue 1</TableCell>
            <TableCell data-testid="gameResultsColumnTitleTeam2">Joukkue 2</TableCell>
            <TableCell data-testid="gameResultsColumnTitleResult">Tulos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {gameResults.map((gameResult) => (
            <TableRow key={gameResult.id}>
              <TableCell data-testid={getGameResultTestId(gameResult, "CreatedAt")}>
                {gameResult.createdAt ? format(gameResult.createdAt, "dd.MM.yyyy HH:mm") : ""}
              </TableCell>
              <TableCell data-testid={getGameResultTestId(gameResult, "Team1")}>
                {gameResult.team1Result.player1?.name} &amp; {gameResult.team1Result.player2?.name}
              </TableCell>
              <TableCell data-testid={getGameResultTestId(gameResult, "Team2")}>
                {gameResult.team2Result.player1?.name} &amp; {gameResult.team2Result.player2?.name}
              </TableCell>
              <TableCell data-testid={getGameResultTestId(gameResult, "Result")}>
                {gameResult.team1Result.points} - {gameResult.team2Result.points}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}

function getGameResultTestId(gameResult: GameResult, lastPart: string) {
  return "gameResult" + format(gameResult.createdAt, "dd.MM.yyyy") + lastPart;
}

export default GameResults;
