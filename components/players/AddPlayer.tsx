import * as React from "react";
import Title from "../dashboard/Title";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import PlayerSave from "../../types/PlayerSave";
import Router from "next/router";

const AddPlayer = ({ }: {}) => {
    const [playerName, setPlayerName] = React.useState("");

    const handleButtonClick = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        try {
            const body: PlayerSave = {
                name: playerName
            }

            await fetch("/api/add-player", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            setPlayerName("");
            await Router.push("/players-container");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Title>Lisää pelaaja</Title>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        label="Nimi"
                        value={playerName}
                        fullWidth
                        onChange={(e) => setPlayerName(e.target.value)}
                    />
                </Grid>
                <Grid item container xs={12} justifyContent="flex-end">
                    <Button variant="contained" onClick={handleButtonClick}>Lisää</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default AddPlayer;