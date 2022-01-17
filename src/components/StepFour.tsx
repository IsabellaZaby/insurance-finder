import {ChangeEvent, FC, useState} from "react";
import {ArrowBack} from "@mui/icons-material";
import styles from './StepFour.module.css';
import {Link, useNavigate} from "react-router-dom";
import {Button, Checkbox, FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup, TextField} from "@mui/material";
import CommonConstants from "./CommonConstants";

const StepFour: FC = () => {

    const navigate = useNavigate();
    const [errors, setErrors] = useState(false);
    const [mailValidationError, setMailValidationError] = useState(false);
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
            "[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+");
        setMailValidationError(!regex.test(event.target.value));
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
            <Link className={styles.back} to="/stepThree"><ArrowBack/> Zurück</Link>
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
                    required={true}
                    placeholder="Erika"
                />
                {errors && firstName === '' && <FormHelperText>{CommonConstants.REQUIRED}</FormHelperText>}
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
                    required={true}
                    placeholder="Musterperson"
                />
                {errors && lastName === '' && <FormHelperText>{CommonConstants.REQUIRED}</FormHelperText>}
            </div>

            <FormControl fullWidth required={true}>
                <TextField
                    className={styles.formelement}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    onChange={handleEmailChange}
                    value={mail}
                    error={errors && (mail === '' && phone === '') || mailValidationError}
                    placeholder="erika.musterperson@email.at"
                />
                {mailValidationError && <FormHelperText>Keine gültige Email-Adresse.</FormHelperText>}
                <h4>UND / ODER</h4>
                <TextField
                    className={styles.formelement}
                    id="outlined-basic"
                    label="Telefonnummer"
                    variant="outlined"
                    onChange={(e) => handleChange(e, setPhone)}
                    value={phone}
                    type={"number"}
                    error={errors && (mail === '' && phone === '')}
                    placeholder="0123456789"
                />
                {errors && (mail === '' && phone === '') && <FormHelperText>Eines dieser Felder ist ein Pflichtfeld.</FormHelperText>}
            </FormControl>
            <p>Wir kontaktieren Sie gerne so schnell wie möglich mit mehr Informationen über ihre gewählte Versicherung.</p>
            <FormControl error={errors && !checkbox}>
                <FormControlLabel
                    control={<Checkbox
                        value={checkbox}
                        aria-label={"Datenschutz-Checkbox"}
                        onChange={(e) => setCheckBox(!checkbox)}
                        sx={errors && !checkbox ? {color: '#d32f2f'} : {}}
                    />}
                    label={<span className={errors && !checkbox ? styles.error
                        : ''}>Ich stimme den <Link onClick={(e) => e.stopPropagation()} to="/datenschutz" target="_blank" className={styles.privacy}>Datenschutzrichtlinien</Link> zu. </span>}/>
            </FormControl>
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
