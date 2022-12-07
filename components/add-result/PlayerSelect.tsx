import Player from "../../types/Player";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material";
import { ReactNode } from "react";

const PlayerSelect = ({ players, title, teamResultTestTitle, handleChange  }: { players: Player[], title: string, teamResultTestTitle: string, 
    handleChange: (event: SelectChangeEvent<string>, child: ReactNode) => void }) => {

    return (
        <FormControl fullWidth>
            <InputLabel data-testid={"playerSelectTitle" + teamResultTestTitle + title}>{title}</InputLabel>
            <Select
                defaultValue=""
                onChange={handleChange}
                data-testid={"playerSelect" + teamResultTestTitle + title}
            >
                {players.map(player => {
                    return (
                        <MenuItem key={player.id} value={player.id} data-testid={"playerNameSelectValue" + teamResultTestTitle + title + player.name}>
                            {player.name}
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}

export default PlayerSelect;