import {Box, Button, FormControl, FormHelperText, Input, InputLabel, MenuItem, Select, SelectChangeEvent, Slider,} from "@mui/material";
import {ChangeEvent, FC, useState} from "react";
import styles from './StepOne.module.css';
import {useNavigate} from "react-router-dom";

const valuetext = (value: number) => {
    return `${value}°C`;
}

const StepOne: FC = () => {

    const [brand, setBrand] = useState("");
    const [year, setYear] = useState("");
    const [bonus, setBonus] = useState("");
    const [error, setError] = useState(false);
    const [sliderValue, setSliderValue] = useState([0, 1000]);
    const [inputOne, setInputOne] = useState<number | string>(0);
    const [inputTwo, setInputTwo] = useState<number | string>(1000);
    const navigate = useNavigate();

    const handleChange = (event: SelectChangeEvent, setMethod: (value: string) => void) => {
        setMethod(event.target.value);
    };

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        console.log(newValue);
        setSliderValue(newValue as number[]);
        if (typeof newValue !== 'number') {
            setInputOne(newValue[0]);
            setInputTwo(newValue[1]);
        }
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setMethod: (value: string | number) => void) => {
        setMethod(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (typeof inputOne !== 'number') {
            setInputTwo(0);
        } else if (inputOne < 0) {
            setInputOne(0);
        } else if (inputOne >= 1000) {
            setInputOne(999);
        } else if (inputOne > inputTwo) {
            setInputOne(Number(inputTwo) - 1);
        }
    };

    const handleSecondBlur = () => {
        if (typeof inputTwo !== 'number') {
            setInputTwo(1000);
        } else if (inputTwo <= 1) {
            setInputTwo(1);
        } else if (inputTwo > 1000) {
            setInputTwo(1000);
        } else if (inputTwo < inputOne) {
            setInputTwo(Number(inputOne) + 1);
        }
    };

    const submit = () => {
        if (brand === '' || year == '' || bonus === '') {
            setError(true);
        } else {
            navigate('/stepTwo');
        }
    };

    return (
        <div className={styles.card}>
            <FormControl sx={{marginRight: '10px', maxWidth: '100%', width: '40%'}}>
                <InputLabel id="demo-simple-select-label">Marke</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={brand}
                    label="Marke"
                    onChange={e => handleChange(e, setBrand)}
                    error={brand === '' && error}
                >
                    <MenuItem value={"Mercedes"}>Mercedes</MenuItem>
                    <MenuItem value={"Audi"}>Audi</MenuItem>
                    <MenuItem value={"Mazda"}>Mazda</MenuItem>
                </Select>
                {brand === '' && error && <FormHelperText>Dieses Feld ist Pflicht.</FormHelperText>}
            </FormControl>

            <FormControl sx={{maxWidth: '100%', width: '40%'}}>
                <InputLabel id="demo-simple-select-label">Jahr</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={year}
                    label="Jahr"
                    onChange={e => handleChange(e, setYear)}
                    error={year === '' && error}
                >
                    <MenuItem value={"2022"}>2022</MenuItem>
                    <MenuItem value={"2021"}>2021</MenuItem>
                    <MenuItem value={"2020"}>2020</MenuItem>
                </Select>
                {year === '' && error && <FormHelperText>Dieses Feld ist Pflicht.</FormHelperText>}
            </FormControl>

            <FormControl sx={{maxWidth: '100%', width: '50%', marginTop: '20px'}}>
                <InputLabel id="demo-simple-select-label">Bonusstufe</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={bonus}
                    label="Bonusstufe"
                    onChange={e => handleChange(e, setBonus)}
                    error={bonus === '' && error}
                >
                    <MenuItem value={"0"}>0</MenuItem>
                    <MenuItem value={"1"}>1</MenuItem>
                    <MenuItem value={"2"}>2</MenuItem>
                </Select>
                {bonus === '' && error && <FormHelperText>Dieses Feld ist Pflicht.</FormHelperText>}
            </FormControl>

            <Box sx={{width: 300}}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={sliderValue}
                    onChange={handleSliderChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    min={0}
                    max={1000}
                />
            </Box>
            <div className={styles.input}>
                <Input
                    value={inputOne}
                    size="medium"
                    onChange={(e) => handleInputChange(e, setInputOne)}
                    onBlur={handleBlur}
                    inputProps={{
                        step: 10,
                        min: 0,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                    onSubmit={handleBlur}
                />
                <Input
                    value={inputTwo}
                    size="medium"
                    onChange={(e) => handleInputChange(e, setInputTwo)}
                    onBlur={handleSecondBlur}
                    inputProps={{
                        step: 10,
                        min: 0,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                    onSubmit={handleSecondBlur}
                />
            </div>
            <Button className={styles.button} variant="contained" onClick={submit}>Contained</Button>
        </div>
    );
};

export default StepOne;
