import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Players from '../components/Players';
import Player from '../types/Player';

const PadelGames = ({ players }: { players: Player[] }) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Players players={players} />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default PadelGames;