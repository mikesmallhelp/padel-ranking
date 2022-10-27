import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import prisma from '../lib/prisma';
import { GetStaticProps } from "next";

export type PlayerProps = {
  id: string;
  name: string;
  games: number;
  points: number;
};

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

type Props = {
  players: PlayerProps[]
}

const Players: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
    <Title>Ranking</Title>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Nimi</TableCell>
          <TableCell>Pisteet</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {props.players.map((player) => (
          <TableRow key={player.id}>
            <TableCell>{player.name}</TableCell>
            <TableCell>{player.points}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </React.Fragment>
  )
}

export default Players;
