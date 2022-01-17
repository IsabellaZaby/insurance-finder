import {FC} from "react";
import styles from './StepTwo.module.css';
import {ArrowBack, FilterAlt, Star} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

// TODO product data and filter menu
const StepTwo: FC = () => {

    const navigate = useNavigate();

    const onRowClick = () => {
        navigate('/stepThree');
    };
    return (
        <div className={styles.wrapper}>
                <a className={styles.back} onClick={() => navigate("/")}><ArrowBack/> Zurück</a>
            <div className={styles.header}>
                <h2 style={{margin: '0'}}>Versicherungsoptionen</h2>
                <FilterAlt/>
            </div>
            <div className={styles.table}>
                <div className={`${styles.row} ${styles.hdrow}`}>
                    <div className={styles.cell}>Anbieter</div>
                    <div className={styles.cell}>Produktinformation</div>
                    <div className={styles.cell}>Bewertung</div>
                    <div className={styles.cell}>€</div>
                </div>
                <div className={styles.row} onClick={onRowClick}>
                    <div className={styles.cell}>Logo</div>
                    <div className={styles.cell}>
                        Produktinformation
                        Produktinformation
                        Produktinformation
                        Produktinformation
                    </div>
                    <div className={styles.cell}><Star/></div>
                    <div className={styles.cell}>ab 00,00 €</div>
                </div>
                <div className={styles.row} onClick={onRowClick}>
                    <div className={styles.cell}>Logo</div>
                    <div className={styles.cell}>
                        Produktinformation
                        Produktinformation
                        Produktinformation
                        Produktinformation
                    </div>
                    <div className={styles.cell}><Star/></div>
                    <div className={styles.cell}>ab 00,00 €</div>
                </div>
                <div className={styles.row} onClick={onRowClick}>
                    <div className={styles.cell}>Logo</div>
                    <div className={styles.cell}>
                        Produktinformation
                        Produktinformation
                        Produktinformation
                        Produktinformation
                    </div>
                    <div className={styles.cell}><Star/></div>
                    <div className={styles.cell}>ab 00,00 €</div>
                </div>
                <div className={styles.row} onClick={onRowClick}>
                    <div className={styles.cell}>Logo</div>
                    <div className={styles.cell}>
                        Produktinformation
                        Produktinformation
                        Produktinformation
                        Produktinformation
                    </div>
                    <div className={styles.cell}><Star/></div>
                    <div className={styles.cell}>ab 00,00 €</div>
                </div>
                <div className={styles.row} onClick={onRowClick}>
                    <div className={styles.cell}>Logo</div>
                    <div className={styles.cell}>
                        Produktinformation
                        Produktinformation
                        Produktinformation
                        Produktinformation
                    </div>
                    <div className={styles.cell}><Star/></div>
                    <div className={styles.cell}>ab 00,00 €</div>
                </div>
                <div className={styles.row} onClick={onRowClick}>
                    <div className={styles.cell}>Logo</div>
                    <div className={styles.cell}>
                        Produktinformation
                        Produktinformation
                        Produktinformation
                        Produktinformation
                    </div>
                    <div className={styles.cell}><Star/></div>
                    <div className={styles.cell}>ab 00,00 €</div>
                </div>
                <div className={styles.row} onClick={onRowClick}>
                    <div className={styles.cell}>Logo</div>
                    <div className={styles.cell}>
                        Produktinformation
                        Produktinformation
                        Produktinformation
                        Produktinformation
                    </div>
                    <div className={styles.cell}><Star/></div>
                    <div className={styles.cell}>ab 00,00 €</div>
                </div>
                <div className={styles.row} onClick={onRowClick}>
                    <div className={styles.cell}>Logo</div>
                    <div className={styles.cell}>
                        Produktinformation
                        Produktinformation
                        Produktinformation
                        Produktinformation
                    </div>
                    <div className={styles.cell}><Star/></div>
                    <div className={styles.cell}>ab 00,00 €</div>
                </div>
                <div className={styles.row} onClick={onRowClick}>
                    <div className={styles.cell}>Logo</div>
                    <div className={styles.cell}>
                        Produktinformation
                        Produktinformation
                        Produktinformation
                        Produktinformation
                    </div>
                    <div className={styles.cell}><Star/></div>
                    <div className={styles.cell}>ab 00,00 €</div>
                </div>
                <div className={styles.row} onClick={onRowClick}>
                    <div className={styles.cell}>Logo</div>
                    <div className={styles.cell}>
                        Produktinformation
                        Produktinformation
                        Produktinformation
                        Produktinformation
                    </div>
                    <div className={styles.cell}><Star/></div>
                    <div className={styles.cell}>ab 00,00 €</div>
                </div>
            </div>
        </div>
    );

};

export default StepTwo;
