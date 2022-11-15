import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import GameResult from '../types/GameResult';

const GameResults = ({ gameResults }: { gameResults: GameResult[] }) => {
  return (
    <React.Fragment>
      <Title>Results</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Team 1</TableCell>
            <TableCell>Team 2</TableCell>
            <TableCell>Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {gameResults.map((gameResult) => (
            <TableRow key={gameResult.id}>
              <TableCell>{gameResult.team1Result.player1?.name} &amp; {gameResult.team1Result.player2?.name}</TableCell>
              <TableCell>{gameResult.team2Result.player1?.name} &amp; {gameResult.team2Result.player2?.name}</TableCell>
              <TableCell>{gameResult.team1Result.points} - {gameResult.team2Result.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}

export default GameResults;
