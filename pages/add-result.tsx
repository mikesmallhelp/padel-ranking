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

export const getStaticProps: GetStaticProps = async () => {
    const players = await prisma.player.findMany({
        orderBy: [
            {
                name: 'asc'
            },
        ]
    });
    console.log('Mika: players: ' + JSON.stringify(players));

    return {
        props: { players }
    };
};

const TeamResult = ({ players, title }: { players: Player[], title: string }) => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12}><Title>{title}</Title></Grid>
            <Grid item xs={3}><PlayerSelect players={players} title="Pelaaja 1" /></Grid>
            <Grid item xs={3}><PlayerSelect players={players} title="Pelaaja 2" /></Grid>
        </Grid>
    )
}

const PlayerSelect = ({ players, title }: { players: Player[], title: string }) => {
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{title}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
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

const AddResult = ({ players }: { players: Player[] }) => {
    return (
        <React.Fragment>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <TeamResult players={players} title="Joukkue 1" />
            </Paper>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <TeamResult players={players} title="Joukkue 2" />
            </Paper>
        </React.Fragment>
    )
}

const AddResultContainer = ({ players }: { players: Player[] }) => {
    return (
        <Dashboard title="Lisää tulos">
            <AddResult players={players} />
        </Dashboard>
    )
}

export default AddResultContainer;