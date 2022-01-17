import {FC} from "react";
import styles from './StepTwo.module.css';
import {ArrowBack, FilterAlt, Star} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";

// TODO product data and filter menu
const StepTwo: FC = () => {

    const navigate = useNavigate();

    const onRowClick = () => {
        navigate('/stepThree');
    };
    return (
        <div className={styles.wrapper}>
            <Link className={styles.back} to="/"><ArrowBack/> Zurück</Link>
            <div className={styles.header}>
                <h2 style={{margin: '0'}}>Versicherungsoptionen</h2>
                <FilterAlt/>
            </div>
            <div className={styles.table}>
                <div className={styles.hdrow}>
                    <div className={styles.cell}>Anbieter</div>
                    <div className={styles.cell}>Produktinformation</div>
                    <div className={styles.cell}>Bewertung</div>
                    <div className={styles.cell}>€</div>
                </div>
                <a className={styles.row} onClick={onRowClick}>
                    <div className={styles.cell}>Logo</div>
                    <div className={styles.cell}>
                        <div className={styles.bullet}>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                        </div>
                    </div>
                    <div className={styles.cell}><Star/></div>
                    <div className={styles.cell}>ab 00,00 €</div>
                </a>
                <a className={styles.row} onClick={onRowClick}>
                    <div className={styles.cell}>Logo</div>
                    <div className={styles.cell}>
                        <div className={styles.bullet}>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                        </div>
                    </div>
                    <div className={styles.cell}><Star/></div>
                    <div className={styles.cell}>ab 00,00 €</div>
                </a>
                <a className={styles.row} onClick={onRowClick}>
                    <div className={styles.cell}>Logo</div>
                    <div className={styles.cell}>
                        <div className={styles.bullet}>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                        </div>
                    </div>
                    <div className={styles.cell}><Star/></div>
                    <div className={styles.cell}>ab 00,00 €</div>
                </a>
                <a className={styles.row} onClick={onRowClick}>
                    <div className={styles.cell}>Logo</div>
                    <div className={styles.cell}>
                        <div className={styles.bullet}>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                        </div>
                    </div>
                    <div className={styles.cell}><Star/></div>
                    <div className={styles.cell}>ab 00,00 €</div>
                </a>
                <a className={styles.row} onClick={onRowClick}>
                    <div className={styles.cell}>Logo</div>
                    <div className={styles.cell}>
                        <div className={styles.bullet}>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                        </div>
                    </div>
                    <div className={styles.cell}><Star/></div>
                    <div className={styles.cell}>ab 00,00 €</div>
                </a>
                <a className={styles.row} onClick={onRowClick}>
                    <div className={styles.cell}>Logo</div>
                    <div className={styles.cell}>
                        <div className={styles.bullet}>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                        </div>
                    </div>
                    <div className={styles.cell}><Star/></div>
                    <div className={styles.cell}>ab 00,00 €</div>
                </a>
                <a className={styles.row} onClick={onRowClick}>
                    <div className={styles.cell}>Logo</div>
                    <div className={styles.cell}>
                        <div className={styles.bullet}>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                        </div>
                    </div>
                    <div className={styles.cell}><Star/></div>
                    <div className={styles.cell}>ab 00,00 €</div>
                </a>
                <a className={styles.row} onClick={onRowClick}>
                    <div className={styles.cell}>Logo</div>
                    <div className={styles.cell}>
                        <div className={styles.bullet}>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                        </div>
                    </div>
                    <div className={styles.cell}><Star/></div>
                    <div className={styles.cell}>ab 00,00 €</div>
                </a>
                <a className={styles.row} onClick={onRowClick}>
                    <div className={styles.cell}>Logo</div>
                    <div className={styles.cell}>
                        <div className={styles.bullet}>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                        </div>
                    </div>
                    <div className={styles.cell}><Star/></div>
                    <div className={styles.cell}>ab 00,00 €</div>
                </a>
                <a className={styles.row} onClick={onRowClick}>
                    <div className={styles.cell}>Logo</div>
                    <div className={styles.cell}>
                        <div className={styles.bullet}>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                            <span className={styles.bullet}>Produktinformation</span>
                        </div>
                    </div>
                    <div className={styles.cell}><Star/></div>
                    <div className={styles.cell}>ab 00,00 €</div>
                </a>
            </div>
        </div>
    );

};

export default StepTwo;
