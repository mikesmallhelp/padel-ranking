import Player from '../types/Player';
import Grid from '@mui/material/Grid';
import Title from '../components/Title';
import PlayerSelect from './PlayerSelect';
import PointsSelect from './PointsSelect';

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

export default TeamResult;