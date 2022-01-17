import {FC} from "react";
import styles from './StepFive.module.css';

const StepFive: FC = () => {
    return (
        <div className={styles.wrapper}>
            <h1>Vielen Dank!</h1>
            <span style={{fontSize: '100px'}}>&#127881;</span>
            <h3>Wir melden uns so schnell wie möglich bei Ihnen mit dem besten Angebot!</h3>
        </div>
    );
};

export default StepFive;
