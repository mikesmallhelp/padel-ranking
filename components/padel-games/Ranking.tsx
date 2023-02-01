import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../dashboard/Title";
import Player from "../../types/Player";

const Ranking = ({ players }: { players: Player[] }) => {
  return (
    <React.Fragment>
      <Title titleTestId="rankingTitle">Ranking</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell data-testid="rankingColumnTitleName">Nimi</TableCell>
            <TableCell data-testid="rankingColumnTitleGames">Pelit</TableCell>
            <TableCell data-testid="rankingColumnTitlePoints">Pisteet</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.id}>
              <TableCell data-testid={player.name + "Name"}>{player.name}</TableCell>
              <TableCell data-testid={player.name + "Games"}>{player.games}</TableCell>
              <TableCell data-testid={player.name + "Points"}>{player.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}

export default Ranking;
