import Player from "../../types/Player";
import Grid from "@mui/material/Grid";
import Title from "../dashboard/Title";
import PlayerSelect from "./PlayerSelect";
import PointsSelect from "./PointsSelect";
import { SelectChangeEvent } from "@mui/material";
import { ReactNode } from "react";

const TeamResult = ({ players, title, player1HandleChange, player2HandleChange, pointsHandleChange }:
    {
        players: Player[], title: string,
        player1HandleChange: (event: SelectChangeEvent<string>, child: ReactNode) => void,
        player2HandleChange: (event: SelectChangeEvent<string>, child: ReactNode) => void,
        pointsHandleChange: (event: SelectChangeEvent<string>, child: ReactNode) => void
    }) => {
    return (
        <Grid container spacing={2} pl={2} pr={2} pb={2}>
            <Grid item xs={12}><Title titleTestId={"teamResultTitle" + title}>{title}</Title></Grid>
            <Grid item xs={12} md={4}><PlayerSelect players={players} title="Pelaaja 1" teamResultTestTitle={title}
                handleChange={player1HandleChange} /></Grid>
            <Grid item xs={12} md={4}><PlayerSelect players={players} title="Pelaaja 2" teamResultTestTitle={title} handleChange={player2HandleChange}
            /></Grid>
            <Grid item xs={12} md={4}><PointsSelect title="Pisteet" teamResultTestTitle={title} handleChange={pointsHandleChange} /></Grid>
        </Grid>
    )
}

export default TeamResult;