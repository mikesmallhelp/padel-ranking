import * as React from "react";
import Paper from "@mui/material/Paper";
import Player from "../../types/Player";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import GameResultSave from "../../types/GameResultSave";
import { SelectChangeEvent } from "@mui/material/Select";
import TeamResult from "./TeamResult";
import Router from "next/router";

const AddResult = ({ players }: { players: Player[] }) => {
    const [team1Player1Id, setTeam1Player1Id] = React.useState("");
    const [team1Player2Id, setTeam1Player2Id] = React.useState("");
    const [team1Points, setTeam1Points] = React.useState(0);
    const [team2Player1Id, setTeam2Player1Id] = React.useState("");
    const [team2Player2Id, setTeam2Player2Id] = React.useState("");
    const [team2Points, setTeam2Points] = React.useState(0);

    const team1Player1Change = (event: SelectChangeEvent) => {
        setTeam1Player1Id(event.target.value);
    }

    const team1Player2Change = (event: SelectChangeEvent) => {
        setTeam1Player2Id(event.target.value);
    }

    const team1PointsChange = (event: SelectChangeEvent) => {
        setTeam1Points(Number(event.target.value));
    }

    const team2Player1Change = (event: SelectChangeEvent) => {
        setTeam2Player1Id(event.target.value);
    }

    const team2Player2Change = (event: SelectChangeEvent) => {
        setTeam2Player2Id(event.target.value);
    }

    const team2PointsChange = (event: SelectChangeEvent) => {
        setTeam2Points(Number(event.target.value));
    }

    const handleButtonClick = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        try {
            const body: GameResultSave = {
                team1Result: {
                    player1Id: team1Player1Id,
                    player2Id: team1Player2Id,
                    points: team1Points
                },
                team2Result: {
                    player1Id: team2Player1Id,
                    player2Id: team2Player2Id,
                    points: team2Points
                }
            };

            await fetch("/api/add-result", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            await Router.push("/");
        } catch (error) {
            console.error(error);
        }
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
                <Button variant="contained" onClick={handleButtonClick} data-testid="addGameResultButton">Lisää</Button>
            </Grid>
        </Grid>
    )
}

export default AddResult;