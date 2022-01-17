import {FC} from "react";
import {Anchor, ArrowBack, Star, StarOutline} from "@mui/icons-material";
import styles from './StepThree.module.css'
import {Link, useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

const StepThree: FC = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <Link className={styles.back} to="/stepTwo"><ArrowBack/> Zurück</Link>
            <div className={styles.headerwrapper}>
                <div className={styles.headerleft}>
                    <h2 style={{margin: '10px 0 5px'}}>Anker Versicherungen</h2>
                    <div>
                        <Star/>
                        <Star/>
                        <StarOutline/>
                        <StarOutline/>
                        <StarOutline/>
                    </div>
                    <h2>ab 70,00€</h2>
                </div>
                <div className={styles.headerright}>
                    <Anchor sx={{fontSize: 100}}/>
                </div>
            </div>
            <div className={styles.textwrapper}>
                <div>
                    <h4>Allgemeine Produktinformation</h4>
                    <ul>
                        <li>Versicherungssumme € 20 Mio.</li>
                        <li>Assistance Paket inkludiert</li>
                        <li>Vertragslaufzeit 1 Jahr</li>
                    </ul>
                </div>
                <div>
                    <h4>Selbstbehalte</h4>
                    <ul>
                        <li>Fremde Fahrer 250€</li>
                        <li>Junge Fahrer (&lt; 24 J.) 400€</li>
                        <li>Produktinformation</li>
                    </ul>
                </div>
                <div>
                    <h4>Besondere Bedingungen</h4>
                    <ul>
                        <li>1 Freischaden pro Jahr</li>
                        <li>Freischaden summiert sich bei Nichtgebrauch</li>
                        <li>Uneingeschränkte Gültigkeit innerhalb Europas</li>
                    </ul>
                </div>
            </div>
            <Button size={"large"} className={styles.button} variant="contained" onClick={() => navigate("/stepFour")}>Mehr Informationen
                erhalten</Button>
        </div>
    );
};

export default StepThree;
