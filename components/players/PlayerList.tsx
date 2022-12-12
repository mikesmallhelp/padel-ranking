import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../dashboard/Title";
import Player from "../../types/Player";

const PlayerList = ({ players }: { players: Player[] }) => {
  return (
    <React.Fragment>
      <Title titleTestId="playerListTitle">Pelaajat</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell data-testid="playerListColumnTitleName">Nimi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.id}>
              <TableCell data-testid={player.id + "Name"}>{player.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}

export default PlayerList;
