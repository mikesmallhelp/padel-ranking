import * as React from 'react';
import Title from '../dashboard/Title';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const AddPlayer = ({ }: {}) => {
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
                        fullWidth
                    />
                </Grid>
                <Grid item container xs={12} justifyContent="flex-end">
                    <Button variant="contained">Lisää</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default AddPlayer;