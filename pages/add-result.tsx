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

const TeamResult = ({ players, title, player1HandleChange, player2HandleChange, pointsHandleChange }:
    { players: Player[], title: string, player1HandleChange: any, player2HandleChange: any, pointsHandleChange: any }) => {
    return (
        <Grid container spacing={2} pl={2} pr={2} pb={2}>
            <Grid item xs={12}><Title>{title}</Title></Grid>
            <Grid item xs={12} md={4}><PlayerSelect players={players} title="Pelaaja 1" handleChange={player1HandleChange} /></Grid>
            <Grid item xs={12} md={4}><PlayerSelect players={players} title="Pelaaja 2" handleChange={player2HandleChange} /></Grid>
            <Grid item xs={12} md={4}><PointsSelect title="Pisteet" handleChange={pointsHandleChange} /></Grid>
        </Grid>
    )
}

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

const PointsSelect = ({ title, handleChange }: { title: string, handleChange: any }) => {
    const pointsValues = [0, 1, 2, 3, 4, 5, 6];

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
    const [team1Player1Id, setTeam1Player1Id] = React.useState("");
    const [team1Player2Id, setTeam1Player2Id] = React.useState("");
    const [team1Points, setTeam1Points] = React.useState(0);
    const [team2Player1Id, setTeam2Player1Id] = React.useState("");
    const [team2Player2Id, setTeam2Player2Id] = React.useState("");
    const [team2Points, setTeam2Points] = React.useState(0);

    const team1Player1Change = (event: SelectChangeEvent) => {
        console.log("team1Player1Change:" + event?.target.value);
        setTeam1Player1Id(event.target.value);
    }

    const team1Player2Change = (event: SelectChangeEvent) => {
        console.log("team1Player2Change:" + event?.target.value);
        setTeam1Player2Id(event.target.value);
    }

    const team1PointsChange = (event: SelectChangeEvent) => {
        console.log("team1PointsChange:" + event?.target.value);
        setTeam1Points(Number(event.target.value));
    }

    const team2Player1Change = (event: SelectChangeEvent) => {
        console.log("team2Player1Change:" + event?.target.value);
        setTeam2Player1Id(event.target.value);
    }

    const team2Player2Change = (event: SelectChangeEvent) => {
        console.log("team2Player2Change:" + event?.target.value);
        setTeam2Player2Id(event.target.value);
    }

    const team2PointsChange = (event: SelectChangeEvent) => {
        console.log("team1PointsChange:" + event?.target.value);
        setTeam2Points(Number(event.target.value));
    }

    const handleButtonClick = () => {
        console.log("handleButtonClick, team1Player1Id:" + team1Player1Id);
    }

    return (
        <Grid container rowSpacing={2}>
            <Grid item xs={12} pb={2}>
                <Paper>
                    <TeamResult players={players} title="Joukkue 1" player1HandleChange={team1Player1Change} player2HandleChange={team1Player2Change}
                                pointsHandleChange={team1PointsChange} />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper>
                    <TeamResult players={players} title="Joukkue 2" player1HandleChange={team2Player1Change} player2HandleChange={team2Player2Change} 
                                pointsHandleChange={team2PointsChange} />
                </Paper>
            </Grid>
            <Grid item xs={12} container justifyContent="flex-end">
                <Button variant="contained" onClick={handleButtonClick}>Lisää</Button>
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