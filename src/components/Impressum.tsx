import {FC} from "react";
import styles from './StepTwo.module.css';

const Impressum: FC = () => {
    return (<div className={styles.wrapper}>
        <h1>Impressum</h1>
        <p>Dieses Projekt wurde im Zuge einer FH Abgabe erstellt und ist ein reiner Prototyp.</p>
    </div>);
};

export default Impressum;
