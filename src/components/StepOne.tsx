import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Slider,
    ToggleButton,
    ToggleButtonGroup,
} from "@mui/material";
import {ChangeEvent, FC, useState} from "react";
import styles from './StepOne.module.css';
import {useNavigate} from "react-router-dom";
import CommonConstants from "./CommonConstants";

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
    const [toggle, setToggle] = useState('Monat');
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

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setMethod: (value: string | number) => void,
        inputNumber: number) => {
        setMethod(event.target.value === '' ? '' : Number(event.target.value));
        const value = Number(event.target.value);
        if (inputNumber === 1 && !isNaN(value)) {
            setSliderValue([value, sliderValue[1]]);
        } else if (inputNumber === 2 && !isNaN(value)) {
            setSliderValue([sliderValue[0], value]);
        }
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
        <div className={styles.wrapper}>
            <h1>Prämienrechner</h1>
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
                        required={true}
                    >
                        <MenuItem value={"Mercedes"}>Mercedes</MenuItem>
                        <MenuItem value={"Audi"}>Audi</MenuItem>
                        <MenuItem value={"Mazda"}>Mazda</MenuItem>
                        <MenuItem value={"BMW"}>BMW</MenuItem>
                        <MenuItem value={"VW"}>VW</MenuItem>
                        <MenuItem value={"Tesla"}>Tesla</MenuItem>
                    </Select>
                    {brand === '' && error && <FormHelperText>{CommonConstants.REQUIRED}</FormHelperText>}
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
                        required={true}
                    >
                        <MenuItem value={"2022"}>2022</MenuItem>
                        <MenuItem value={"2021"}>2021</MenuItem>
                        <MenuItem value={"2020"}>2020</MenuItem>
                        <MenuItem value={"2019"}>2019</MenuItem>
                        <MenuItem value={"2018"}>2018</MenuItem>
                        <MenuItem value={"2017"}>2017</MenuItem>
                        <MenuItem value={"2016"}>2016</MenuItem>
                        <MenuItem value={"2015"}>2015</MenuItem>
                        <MenuItem value={"2014"}>2014</MenuItem>
                        <MenuItem value={"2013"}>2013</MenuItem>
                        <MenuItem value={"2012"}>2012</MenuItem>
                        <MenuItem value={"2011"}>2011</MenuItem>
                        <MenuItem value={"2010"}>2010</MenuItem>
                    </Select>
                    {year === '' && error && <FormHelperText>{CommonConstants.REQUIRED}</FormHelperText>}
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
                        required={true}
                    >
                        <MenuItem value={"0"}>0</MenuItem>
                        <MenuItem value={"1"}>1</MenuItem>
                        <MenuItem value={"2"}>2</MenuItem>
                        <MenuItem value={"3"}>3</MenuItem>
                        <MenuItem value={"4"}>4</MenuItem>
                        <MenuItem value={"5"}>5</MenuItem>
                        <MenuItem value={"6"}>6</MenuItem>
                        <MenuItem value={"7"}>7</MenuItem>
                        <MenuItem value={"8"}>8</MenuItem>
                        <MenuItem value={"9"}>9</MenuItem>
                    </Select>
                    {bonus === '' && error && <FormHelperText>{CommonConstants.REQUIRED}</FormHelperText>}
                </FormControl>
                <div className={styles.sliderwrapper}>
                    <ToggleButtonGroup
                        value={toggle}
                        exclusive
                        onChange={(e, newValue) => {
                            setToggle(newValue)
                        }}
                        aria-label="Preisrange für Monat oder Jahr auswählen"
                        sx={{height: 30}}
                    >
                        <ToggleButton value="Monat" aria-label="Monat">
                            Monat
                        </ToggleButton>
                        <ToggleButton value="Jahr" aria-label="Jahr">
                            Jahr
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <Box sx={{width: '100%'}}>
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
                            onChange={(e) => handleInputChange(e, setInputOne, 1)}
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
                            onChange={(e) => handleInputChange(e, setInputTwo, 2)}
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
                </div>
                <Button className={styles.button} variant="contained" onClick={submit}>LOS</Button>
            </div>
        </div>
    );
};

export default StepOne;
