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
      <Title>Ranking</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nimi</TableCell>
            <TableCell>Pelit</TableCell>
            <TableCell>Pisteet</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.id}>
              <TableCell>{player.name}</TableCell>
              <TableCell>{player.games}</TableCell>
              <TableCell>{player.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}

export default Ranking;
