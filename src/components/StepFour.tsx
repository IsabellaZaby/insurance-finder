import {ChangeEvent, FC, useState} from "react";
import {ArrowBack} from "@mui/icons-material";
import styles from './StepFour.module.css';
import {useNavigate} from "react-router-dom";
import {Button, Checkbox, FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup, TextField} from "@mui/material";

//TODO fix checkbox
const StepFour: FC = () => {

    const navigate = useNavigate();
    const [errors, setErrors] = useState(false);
    const [mailValidationError, setMailValidationError] = useState(false);
    const [phoneValidationError, setPhoneValidationError] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [checkbox, setCheckBox] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setMethod: (value: string) => void) => {
        setMethod(event.target.value);
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setMail(event.target.value);
        const regex = new RegExp(
            "/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;");
        setMailValidationError(!regex.test(event.target.value));
    };

    const handlePhoneChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPhone(event.target.value);
        const regex = new RegExp("^[0-9]*");
        setPhoneValidationError(!regex.test(event.target.value));
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
                    onChange={handleEmailChange}
                    value={mail}
                    error={errors && (mail === '' && phone === '') || mailValidationError}
                />
                {mailValidationError && <FormHelperText>Keine gültige Email-Adresse.</FormHelperText>}
                <h4>UND / ODER</h4>
                <TextField
                    className={styles.formelement}
                    id="outlined-basic"
                    label="Telefonnummer"
                    variant="outlined"
                    onChange={handlePhoneChange}
                    value={phone}
                    error={errors && (mail === '' && phone === '') || phoneValidationError}
                />
                {errors && (mail === '' && phone === '') && <FormHelperText>Eines dieser Felder ist Pflicht.</FormHelperText>}
                {phoneValidationError && <FormHelperText>Die Telefonnummer darf nur aus Zahlen bestehen.</FormHelperText>}
            </FormControl>
            <p>Wir kontaktieren Sie gerne so schnell wie möglich mit mehr Informationen über ihre gewählte Versicherung.</p>
            <div>
                <Checkbox
                    value={checkbox}
                    aria-label={"datenschutz"}
                    onChange={(e) => setCheckBox(!checkbox)}
                    required={true}
                    sx={{color: 'red'}}
                />
                Ich stimme den <a>Datenschutzrichtlinien</a> zu.
                {errors && !checkbox && <FormHelperText className={styles.error}>Sie müssen den Datenschutzrichtlinien
                    zustimmen.</FormHelperText>}
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
