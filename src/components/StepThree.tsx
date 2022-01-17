import {FC} from "react";
import {ArrowBack, Star, StarOutline} from "@mui/icons-material";
import styles from './StepThree.module.css'
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

const StepThree: FC = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <a className={styles.back} onClick={() => navigate("/stepTwo")}><ArrowBack/> Zurück</a>
            <h2 style={{margin: '10px 0 5px'}}>Versicherungsoption 1</h2>
            <h3 style={{margin: '0'}}>Anbieter</h3>
            <div>
                <Star/>
                <Star/>
                <StarOutline/>
                <StarOutline/>
                <StarOutline/>
            </div>
            <h2>ab 00,00€</h2>
            <div>
                <h4>Produktinformationsabschnitt 1</h4>
                <ul>
                    <li>Produktinformation</li>
                    <li>Produktinformation</li>
                    <li>Produktinformation</li>
                </ul>
            </div>
            <div>
                <h4>Produktinformationsabschnitt 2</h4>
                <ul>
                    <li>Produktinformation</li>
                    <li>Produktinformation</li>
                    <li>Produktinformation</li>
                </ul>
            </div>
            <div>
                <h4>Produktinformationsabschnitt 3</h4>
                <ul>
                    <li>Produktinformation</li>
                    <li>Produktinformation</li>
                    <li>Produktinformation</li>
                </ul>
            </div>
            <Button size={"large"} className={styles.button} variant="contained" onClick={() => navigate("/stepFour")}>Mehr Informationen erhalten</Button>
        </div>
    );
};

export default StepThree;
