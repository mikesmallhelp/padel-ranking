import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../components/Title';
import Player from '../types/Player';
import { GetStaticProps } from "next"
import prisma from '../lib/prisma';

export const getStaticProps: GetStaticProps = async () => {
    const players = await prisma.player.findMany({
      orderBy: [
        {
          points: 'desc',
        },
      ]
    });
    console.log('Mika: players: ' + JSON.stringify(players));
  
    return {
      props: { players }
    };
  };

const Players = ({ players }: { players: Player[] }) => {
    return (
      <React.Fragment>
        <Title>Lisää tulos</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Nimi</TableCell>
              <TableCell>Pisteet</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player) => (
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