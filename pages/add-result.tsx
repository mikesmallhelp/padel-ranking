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
        <Grid container spacing={2} pl={2} pr={2} pb={2}>
            <Grid item xs={12}><Title>{title}</Title></Grid>
            <Grid item xs={4}><PlayerSelect players={players} title="Pelaaja 1" /></Grid>
            <Grid item xs={4}><PlayerSelect players={players} title="Pelaaja 2" /></Grid>
            <Grid item xs={4}><PointsSelect title="Pisteet" /></Grid>
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
                defaultValue = ""
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

const PointsSelect = ({ title }: { title: string }) => {
    const pointsValues = [0, 1, 2, 3, 4, 5, 6];

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{title}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                defaultValue = ""
            >
                {pointsValues.map(pointsValue => {
                    return (
                        <MenuItem key={pointsValue} value={pointsValue}>
                            {pointsValue}
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}

const AddResult = ({ players }: { players: Player[] }) => {
    return (
        <Grid container rowSpacing={2}>
            <Grid item xs={12} pb={2}>
                <Paper>
                    <TeamResult players={players} title="Joukkue 1" />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper>
                    <TeamResult players={players} title="Joukkue 2" />
                </Paper>
            </Grid>
            <Grid item xs={12} container justifyContent="flex-end">
                <Button variant="contained">Lisää</Button>
            </Grid>
        </Grid>
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