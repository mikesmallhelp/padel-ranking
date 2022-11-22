import Player from "../../types/Player";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material";
import { ReactNode } from "react";

const PlayerSelect = ({ players, title, handleChange }: { players: Player[], title: string, 
    handleChange: (event: SelectChangeEvent<string>, child: ReactNode) => void }) => {
    return (
        <FormControl fullWidth>
            <InputLabel>{title}</InputLabel>
            <Select
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