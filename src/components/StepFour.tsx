import {ChangeEvent, FC, useState} from "react";
import {ArrowBack} from "@mui/icons-material";
import styles from './StepFour.module.css';
import {useNavigate} from "react-router-dom";
import {Button, Checkbox, FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup, TextField} from "@mui/material";


//TODO fix checkbox and email phone validation
const StepFour: FC = () => {

    const navigate = useNavigate();
    const [errors, setErrors] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [checkbox, setCheckBox] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setMethod: (value: string) => void) => {
        setMethod(event.target.value);
    };

    const onButtonClick = () => {
        if (firstName === '' || lastName === '' || (phone === '' && mail === '') || !checkbox) {
            setErrors(true);
        } else {
            navigate("/stepFive");
        }
    };

    return (
        <div className={styles.wrapper}>
            <a className={styles.back} onClick={() => navigate("/")}><ArrowBack/> Zurück</a>
            <FormControl component="fieldset">
                <RadioGroup
                    aria-label="geschlecht"
                    defaultValue="Frau"
                    name="radio-buttons-group"
                    className={styles.radiobuttons}
                >
                    <FormControlLabel value="Frau" control={<Radio/>} label="Frau"/>
                    <FormControlLabel value="Herr" control={<Radio/>} label="Herr"/>
                    <FormControlLabel value="Divers" control={<Radio/>} label="Divers"/>
                </RadioGroup>
            </FormControl>
            <div className={styles.formelement}>
                <TextField
                    className={styles.formelement}
                    id="outlined-basic"
                    label="Vorname"
                    variant="outlined"
                    onChange={e => handleChange(e, setFirstName)}
                    value={firstName}
                    error={errors && firstName === ''}
                />
                {errors && firstName === '' && <FormHelperText>Dieses Feld ist Pflicht.</FormHelperText>}
            </div>
            <div className={styles.formelement}>
                <TextField
                    className={styles.formelement}
                    id="outlined-basic"
                    label="Nachname"
                    variant="outlined"
                    onChange={e => handleChange(e, setLastName)}
                    value={lastName}
                    error={errors && lastName === ''}
                />
                {errors && lastName === '' && <FormHelperText>Dieses Feld ist Pflicht.</FormHelperText>}
            </div>

            <FormControl fullWidth>
                <TextField
                    className={styles.formelement}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    onChange={e => handleChange(e, setMail)}
                    value={mail}
                    error={errors && (mail === '' && phone === '')}
                />
                <h4>UND / ODER</h4>
                <TextField
                    className={styles.formelement}
                    id="outlined-basic"
                    label="Telefonnummer"
                    variant="outlined"
                    onChange={e => handleChange(e, setPhone)}
                    value={phone}
                    error={errors && (mail === '' && phone === '')}
                />
                {errors && (mail === '' && phone === '') && <FormHelperText>Eines dieser Felder ist Pflicht.</FormHelperText>}
            </FormControl>
            <p>Wir kontaktieren Sie gerne so schnell wie möglich mit mehr Informationen über ihre gewählte Versicherung.</p>
            <div>
                <Checkbox
                    value={checkbox}
                    aria-label={"datenschutz"}
                    onChange={(e) => setCheckBox(!checkbox)}
                    required={true}/>
                Ich stimme den <a>Datenschutzrichtlinien</a> zu.
                {errors && !checkbox && <FormHelperText className={styles.error}>Sie müssen den Datenschutzrichtlinien zustimmen.</FormHelperText>}
            </div>
            <Button
                size={"large"}
                className={styles.button}
                variant="contained"
                onClick={onButtonClick}
            >
                Mehr Informationen erhalten
            </Button>

        </div>
    );
};

export default StepFour;
