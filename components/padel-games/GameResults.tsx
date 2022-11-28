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
          <TableRow data-testid="gameResultsColumnHeaders">
            <TableCell data-testid="tableHeadTime">Aika</TableCell>
            <TableCell data-testid="tableHeadTeam1">Joukkue 1</TableCell>
            <TableCell data-testid="tableHeadTeam2">Joukkue 2</TableCell>
            <TableCell data-testid="tableHeadResult">Tulos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {gameResults.map((gameResult) => (
            <TableRow key={gameResult.id} data-testid={gameResult.id}>
              <TableCell data-testid={gameResult.id + "createdAt"}>
                {gameResult.createdAt ? format(gameResult.createdAt, "dd.MM.yyyy HH:mm") : ""}
              </TableCell>
              <TableCell data-testid={gameResult.id + "team1"}>
                {gameResult.team1Result.player1?.name} &amp; {gameResult.team1Result.player2?.name}
              </TableCell>
              <TableCell data-testid={gameResult.id + "team2"}>
                {gameResult.team2Result.player1?.name} &amp; {gameResult.team2Result.player2?.name}
              </TableCell>
              <TableCell data-testid={gameResult.id + "result"}>
                {gameResult.team1Result.points} - {gameResult.team2Result.points}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}

export default GameResults;
