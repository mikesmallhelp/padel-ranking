import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Player from '../types/Player';
import { GetStaticProps } from "next"
import prisma from '../lib/prisma';
import Dashboard from "../components/Dashboard";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Title from '../components/Title';
import Button from '@mui/material/Button';
import Router from 'next/router';
import GameResult from '../types/GameResult';

const PlayerSelect = ({ players, title, handleChange }: { players: Player[], title: string, handleChange: any }) => {
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{title}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                defaultValue=""
                onChange={handleChange}
            >
                {players.map(player => {
                    return (
                        <MenuItem key={player.id} value={player.id}>
                            {player.name}
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}

export default PlayerSelect;