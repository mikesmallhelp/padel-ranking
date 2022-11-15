import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Players from '../components/Players';
import Player from '../types/Player';
import GameResult from "../types/GameResult";
import GameResults from '../components/GameResults';

const PadelGames = ({ players, gameResults }: { players: Player[], gameResults: GameResult[] }) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Players players={players} />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <GameResults gameResults={gameResults} />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default PadelGames;