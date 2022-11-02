import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const PointsSelect = ({ title, handleChange }: { title: string, handleChange: any }) => {
    const pointsValues = [0, 1, 2, 3, 4, 5, 6];

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
                {pointsValues.map(pointsValue => {
                    return (
                        <MenuItem key={pointsValue} value={pointsValue}>
                            {pointsValue}
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}

export default PointsSelect;