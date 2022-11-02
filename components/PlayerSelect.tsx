import Player from '../types/Player';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

export default PlayerSelect;