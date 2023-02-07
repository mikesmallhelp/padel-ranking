import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material";
import { ReactNode } from "react";

const PointsSelect = ({ title, teamResultTestTitle, handleChange }: { title: string, teamResultTestTitle: string, 
    handleChange: (event: SelectChangeEvent<string>, child: ReactNode) => void }) => {
    const pointsValues = [0, 1, 2, 3, 4, 5, 6];

    return (
        <FormControl fullWidth>
            <InputLabel data-testid={"pointsSelectTitle" + teamResultTestTitle + title}>{title}</InputLabel>
            <Select
                data-testid={"pointsSelect" + teamResultTestTitle + title}
                defaultValue=""
                onChange={handleChange}
            >
                {pointsValues.map(pointsValue => {
                    return (
                        <MenuItem key={pointsValue} value={pointsValue} data-testid={"pointsSelectValue" + teamResultTestTitle + title + pointsValue}>
                            {pointsValue}
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}

export default PointsSelect;