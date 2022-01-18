import {FC} from "react";
import styles from './StepTwo.module.css';
import {
    AcUnit, AddAlert,
    Anchor,
    ArrowBack,
    CarRepair, ChevronRight,
    DirectionsCar,
    FilterAlt, Fireplace,
    LocalCarWash,
    LogoDev,
    Pin,
    Star,
    StarOutline,
    Telegram
} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import {useBreakpoints} from "react-match-breakpoints";

// TODO product data and filter menu
const StepTwo: FC = () => {

    const navigate = useNavigate();
    const breakpoints = useBreakpoints()

    const onRowClick = () => {
        navigate('/stepThree');
    };

    const renderTabletDesktop = () => {
        return (<div className={styles.table}>
            <div className={styles.hdrow}>
                <div className={styles.cell}>Anbieter</div>
                <div className={styles.cell}>Produktinformation</div>
                <div className={styles.cell}>Bewertung</div>
                <div className={styles.cell}>€</div>
            </div>
            <a className={styles.row} onClick={onRowClick}>
                <div className={styles.cell}><CarRepair sx={{fontSize: 42}}/></div>
                <div className={styles.cell}>
                    <div className={styles.bullet}>
                        <span className={styles.bullet}>Versicherungssumme € 20 Mio.</span>
                        <span className={styles.bullet}>1 Freischaden pro Jahr</span>
                        <span className={styles.bullet}>Laufzeit Rechtsschutz 10 Jahre</span>
                    </div>
                </div>
                <div className={styles.cell}><Star/><Star/><Star/><StarOutline/><StarOutline/></div>
                <div className={`${styles.cell} ${styles.price}`}>ab <br/>70,00 €</div>
            </a>
            <div className={styles.buttonrow}>
                <div className={styles.cell}/>
                <div className={styles.cell}/>
                <div className={styles.cell}/>
                <Button onClick={onRowClick} variant="contained" className={styles.cell}>Details</Button>
            </div>
            <a className={styles.row} onClick={onRowClick}>
                <div className={styles.cell}><DirectionsCar sx={{fontSize: 42}}/></div>
                <div className={styles.cell}>
                    <div className={styles.bullet}>
                        <span className={styles.bullet}>Versicherungssumme € 10 Mio.</span>
                        <span className={styles.bullet}>Kein Freischaden pro Jahr</span>
                        <span className={styles.bullet}>Laufzeit Rechtsschutz 8 Jahre</span>
                    </div>
                </div>
                <div className={styles.cell}><Star/><Star/><Star/><Star/><StarOutline/></div>
                <div className={`${styles.cell} ${styles.price}`}>ab <br/>80,00 €</div>
            </a>
            <div className={styles.buttonrow}>
                <div className={styles.cell}/>
                <div className={styles.cell}/>
                <div className={styles.cell}/>
                <Button onClick={onRowClick} variant="contained" className={styles.cell}>Details</Button>
            </div>
            <a className={styles.row} onClick={onRowClick}>
                <div className={styles.cell}><AcUnit sx={{fontSize: 42}}/></div>
                <div className={styles.cell}>
                    <div className={styles.bullet}>
                        <span className={styles.bullet}>Versicherungssumme € 15 Mio.</span>
                        <span className={styles.bullet}>1 Freischaden pro Jahr</span>
                        <span className={styles.bullet}>Laufzeit Rechtsschutz 3 Jahre</span>
                    </div>
                </div>
                <div className={styles.cell}><Star/><Star/><StarOutline/><StarOutline/><StarOutline/></div>
                <div className={`${styles.cell} ${styles.price}`}>ab <br/>100,00 €</div>
            </a>
            <div className={styles.buttonrow}>
                <div className={styles.cell}/>
                <div className={styles.cell}/>
                <div className={styles.cell}/>
                <Button onClick={onRowClick} variant="contained" className={styles.cell}>Details</Button>
            </div>
            <a className={styles.row} onClick={onRowClick}>
                <div className={styles.cell}><AddAlert sx={{fontSize: 42}}/></div>
                <div className={styles.cell}>
                    <div className={styles.bullet}>
                        <span className={styles.bullet}>Versicherungssumme € 12 Mio.</span>
                        <span className={styles.bullet}>1 Freischaden pro Jahr</span>
                        <span className={styles.bullet}>Kein Rechtsschutz inkludiert</span>
                    </div>
                </div>
                <div className={styles.cell}><Star/><Star/><Star/><Star/><StarOutline/></div>
                <div className={`${styles.cell} ${styles.price}`}>ab <br/>60,00 €</div>
            </a>
            <div className={styles.buttonrow}>
                <div className={styles.cell}/>
                <div className={styles.cell}/>
                <div className={styles.cell}/>
                <Button onClick={onRowClick} variant="contained" className={styles.cell}>Details</Button>
            </div>
            <a className={styles.row} onClick={onRowClick}>
                <div className={styles.cell}><Fireplace sx={{fontSize: 42}}/></div>
                <div className={styles.cell}>
                    <div className={styles.bullet}>
                        <span className={styles.bullet}>Versicherungssumme € 20 Mio.</span>
                        <span className={styles.bullet}>1 Freischaden pro Jahr</span>
                        <span className={styles.bullet}>Kein Rechtsschutz inkludiert</span>
                    </div>
                </div>
                <div className={styles.cell}><Star/><Star/><Star/><Star/><StarOutline/></div>
                <div className={`${styles.cell} ${styles.price}`}>ab <br/>60,00 €</div>
            </a>
            <div className={styles.buttonrow}>
                <div className={styles.cell}/>
                <div className={styles.cell}/>
                <div className={styles.cell}/>
                <Button onClick={onRowClick} variant="contained" className={styles.cell}>Details</Button>
            </div>
            <a className={styles.row} onClick={onRowClick}>
                <div className={styles.cell}><LogoDev sx={{fontSize: 42}}/></div>
                <div className={styles.cell}>
                    <div className={styles.bullet}>
                        <span className={styles.bullet}>Versicherungssumme € 14 Mio.</span>
                        <span className={styles.bullet}>Kein Freischaden</span>
                        <span className={styles.bullet}>Laufzeit Rechtsschutz 10 Jahre</span>
                    </div>
                </div>
                <div className={styles.cell}><Star/><Star/><Star/><Star/><Star/></div>
                <div className={`${styles.cell} ${styles.price}`}>ab <br/>80,00 €</div>
            </a>
            <div className={styles.buttonrow}>
                <div className={styles.cell}/>
                <div className={styles.cell}/>
                <div className={styles.cell}/>
                <Button onClick={onRowClick} variant="contained" className={styles.cell}>Details</Button>
            </div>
            <a className={styles.row} onClick={onRowClick}>
                <div className={styles.cell}><Pin sx={{fontSize: 42}}/></div>
                <div className={styles.cell}>
                    <div className={styles.bullet}>
                        <span className={styles.bullet}>Versicherungssumme € 8 Mio.</span>
                        <span className={styles.bullet}>1 Freischaden pro Jahr</span>
                        <span className={styles.bullet}>Laufzeit Rechtsschutz 3 Jahre</span>
                    </div>
                </div>
                <div className={styles.cell}><Star/><Star/><StarOutline/><StarOutline/><StarOutline/></div>
                <div className={`${styles.cell} ${styles.price}`}>ab <br/>90,00 €</div>
            </a>
            <div className={styles.buttonrow}>
                <div className={styles.cell}/>
                <div className={styles.cell}/>
                <div className={styles.cell}/>
                <Button onClick={onRowClick} variant="contained" className={styles.cell}>Details</Button>
            </div>
            <a className={styles.row} onClick={onRowClick}>
                <div className={styles.cell}><Telegram sx={{fontSize: 42}}/></div>
                <div className={styles.cell}>
                    <div className={styles.bullet}>
                        <span className={styles.bullet}>Versicherungssumme € 9 Mio.</span>
                        <span className={styles.bullet}>Kein Freischaden</span>
                        <span className={styles.bullet}>Laufzeit Rechtsschutz 10 Jahre</span>
                    </div>
                </div>
                <div className={styles.cell}><Star/><Star/><Star/><StarOutline/><StarOutline/></div>
                <div className={`${styles.cell} ${styles.price}`}>ab <br/>70,00 €</div>
            </a>
            <div className={styles.buttonrow}>
                <div className={styles.cell}/>
                <div className={styles.cell}/>
                <div className={styles.cell}/>
                <Button onClick={onRowClick} variant="contained" className={styles.cell}>Details</Button>
            </div>
            <a className={styles.row} onClick={onRowClick}>
                <div className={styles.cell}><Anchor sx={{fontSize: 42}}/></div>
                <div className={styles.cell}>
                    <div className={styles.bullet}>
                        <span className={styles.bullet}>Versicherungssumme € 19 Mio.</span>
                        <span className={styles.bullet}>Kein Freischaden</span>
                        <span className={styles.bullet}>Kein Rechtsschutz inkludiert</span>
                    </div>
                </div>
                <div className={styles.cell}><Star/><Star/><Star/><Star/><Star/></div>
                <div className={`${styles.cell} ${styles.price}`}>ab <br/>100,00 €</div>
            </a>
            <div className={styles.buttonrow}>
                <div className={styles.cell}/>
                <div className={styles.cell}/>
                <div className={styles.cell}/>
                <Button onClick={onRowClick} variant="contained" className={styles.cell}>Details</Button>
            </div>
            <a className={styles.row} onClick={onRowClick}>
                <div className={styles.cell}><LocalCarWash sx={{fontSize: 42}}/></div>
                <div className={styles.cell}>
                    <div className={styles.bullet}>
                        <span className={styles.bullet}>Versicherungssumme € 10 Mio.</span>
                        <span className={styles.bullet}>Kein Freischaden</span>
                        <span className={styles.bullet}>Kein Rechtsschutz inkludiert</span>
                    </div>
                </div>
                <div className={styles.cell}><Star/><StarOutline/><StarOutline/><StarOutline/><StarOutline/></div>
                <div className={`${styles.cell} ${styles.price}`}>ab <br/>100,00 €</div>
            </a>
            <div className={styles.buttonrow}>
                <div className={styles.cell}/>
                <div className={styles.cell}/>
                <div className={styles.cell}/>
                <Button onClick={onRowClick} variant="contained" className={styles.cell}>Details</Button>
            </div>
        </div>);
    };

    const renderMobile = () => {
        return (<div className={styles.mobile}>
            <a className={styles.card} onClick={onRowClick}>
                <div className={styles.cardinner}>
                    <CarRepair sx={{fontSize: 42}}/>
                    <div className={styles.cardcontent}>
                        <div className={styles.bullet}>
                            <span className={styles.bullet}>Versicherungssumme € 20 Mio.</span>
                            <span className={styles.bullet}>1 Freischaden pro Jahr</span>
                            <span className={styles.bullet}>Laufzeit Rechtsschutz 10 Jahre</span>
                        </div>

                    </div>
                </div>
                <div className={styles.cardinner}>
                    <div className={styles.review}><Star/><Star/><Star/><StarOutline/><StarOutline/></div>
                    <div className={styles.price}>ab <br/>70,00 €</div>
                </div>
                <Button onClick={onRowClick} variant="contained" className={styles.buttonmobile}>Details</Button>
            </a>
            <a className={styles.card} onClick={onRowClick}>
                <div className={styles.cardinner}>
                    <DirectionsCar sx={{fontSize: 42}}/>
                    <div className={styles.cardcontent}>
                        <div className={styles.bullet}>
                            <span className={styles.bullet}>Versicherungssumme € 10 Mio.</span>
                            <span className={styles.bullet}>Kein Freischaden pro Jahr</span>
                            <span className={styles.bullet}>Laufzeit Rechtsschutz 8 Jahre</span>
                        </div>
                    </div>
                </div>
                <div className={styles.cardinner}>
                    <div className={styles.review}><Star/><Star/><Star/><Star/><StarOutline/></div>
                    <div className={styles.price}>ab <br/>80,00 €</div>
                </div>
                <Button onClick={onRowClick} variant="contained" className={styles.buttonmobile}>Details</Button>
            </a>
            <a className={styles.card} onClick={onRowClick}>
                <div className={styles.cardinner}>
                    <AcUnit sx={{fontSize: 42}}/>
                    <div className={styles.cardcontent}>
                        <div className={styles.bullet}>
                            <span className={styles.bullet}>Versicherungssumme € 15 Mio.</span>
                            <span className={styles.bullet}>1 Freischaden pro Jahr</span>
                            <span className={styles.bullet}>Laufzeit Rechtsschutz 3 Jahre</span>
                        </div>
                    </div>
                </div>
                <div className={styles.cardinner}>
                    <div className={styles.review}><Star/><Star/><StarOutline/><StarOutline/><StarOutline/></div>
                    <div className={styles.price}>ab <br/>100,00 €</div>
                </div>
                <Button onClick={onRowClick} variant="contained" className={styles.buttonmobile}>Details</Button>
            </a>
            <a className={styles.card} onClick={onRowClick}>
                <div className={styles.cardinner}>
                    <AddAlert sx={{fontSize: 42}}/>
                    <div className={styles.cardcontent}>
                        <div className={styles.bullet}>
                            <span className={styles.bullet}>Versicherungssumme € 12 Mio.</span>
                            <span className={styles.bullet}>1 Freischaden pro Jahr</span>
                            <span className={styles.bullet}>Kein Rechtsschutz inkludiert</span>
                        </div>
                    </div>
                </div>
                <div className={styles.cardinner}>
                    <div className={styles.review}><Star/><Star/><Star/><Star/><StarOutline/></div>
                    <div className={styles.price}>ab <br/>60,00 €</div>
                </div>
                <Button onClick={onRowClick} variant="contained" className={styles.buttonmobile}>Details</Button>
            </a>
            <a className={styles.card} onClick={onRowClick}>
                <div className={styles.cardinner}>
                    <Fireplace sx={{fontSize: 42}}/>
                    <div className={styles.cardcontent}>
                        <div className={styles.bullet}>
                            <span className={styles.bullet}>Versicherungssumme € 20 Mio.</span>
                            <span className={styles.bullet}>1 Freischaden pro Jahr</span>
                            <span className={styles.bullet}>Kein Rechtsschutz inkludiert</span>
                        </div>
                    </div>
                </div>
                <div className={styles.cardinner}>
                    <div className={styles.review}><Star/><Star/><Star/><Star/><StarOutline/></div>
                    <div className={styles.price}>ab <br/>60,00 €</div>
                </div>
                <Button onClick={onRowClick} variant="contained" className={styles.buttonmobile}>Details</Button>
            </a>
            <a className={styles.card} onClick={onRowClick}>
                <div className={styles.cardinner}>
                    <LogoDev sx={{fontSize: 42}}/>
                    <div className={styles.cardcontent}>
                        <div className={styles.bullet}>
                            <span className={styles.bullet}>Versicherungssumme € 14 Mio.</span>
                            <span className={styles.bullet}>Kein Freischaden</span>
                            <span className={styles.bullet}>Laufzeit Rechtsschutz 10 Jahre</span>
                        </div>
                    </div>
                </div>
                <div className={styles.cardinner}>
                    <div className={styles.review}><Star/><Star/><Star/><Star/><Star/></div>
                    <div className={styles.price}>ab <br/>80,00 €</div>
                </div>
                <Button onClick={onRowClick} variant="contained" className={styles.buttonmobile}>Details</Button>
            </a>
            <a className={styles.card} onClick={onRowClick}>
                <div className={styles.cardinner}>
                    <Pin sx={{fontSize: 42}}/>
                    <div className={styles.cardcontent}>
                        <div className={styles.bullet}>
                            <span className={styles.bullet}>Versicherungssumme € 8 Mio.</span>
                            <span className={styles.bullet}>1 Freischaden pro Jahr</span>
                            <span className={styles.bullet}>Laufzeit Rechtsschutz 3 Jahre</span>
                        </div>
                    </div>
                </div>
                <div className={styles.cardinner}>
                    <div className={styles.review}><Star/><Star/><StarOutline/><StarOutline/><StarOutline/></div>
                    <div className={styles.price}>ab <br/>90,00 €</div>
                </div>
                <Button onClick={onRowClick} variant="contained" className={styles.buttonmobile}>Details</Button>
            </a>
            <a className={styles.card} onClick={onRowClick}>
                <div className={styles.cardinner}>
                    <Telegram sx={{fontSize: 42}}/>
                    <div className={styles.cardcontent}>
                        <div className={styles.bullet}>
                            <span className={styles.bullet}>Versicherungssumme € 9 Mio.</span>
                            <span className={styles.bullet}>Kein Freischaden</span>
                            <span className={styles.bullet}>Laufzeit Rechtsschutz 10 Jahre</span>
                        </div>
                    </div>
                </div>
                <div className={styles.cardinner}>
                    <div className={styles.review}><Star/><Star/><Star/><StarOutline/><StarOutline/></div>
                    <div className={styles.price}>ab <br/>70,00 €</div>
                </div>
                <Button onClick={onRowClick} variant="contained" className={styles.buttonmobile}>Details</Button>
            </a>
            <a className={styles.card} onClick={onRowClick}>
                <div className={styles.cardinner}>
                    <Anchor sx={{fontSize: 42}}/>
                    <div className={styles.cardcontent}>
                        <div className={styles.bullet}>
                            <span className={styles.bullet}>Versicherungssumme € 19 Mio.</span>
                            <span className={styles.bullet}>Kein Freischaden</span>
                            <span className={styles.bullet}>Kein Rechtsschutz inkludiert</span>
                        </div>
                    </div>
                </div>
                <div className={styles.cardinner}>
                    <div className={styles.review}><Star/><Star/><Star/><Star/><Star/></div>
                    <div className={styles.price}>ab <br/>100,00 €</div>
                </div>
                <Button onClick={onRowClick} variant="contained" className={styles.buttonmobile}>Details</Button>
            </a>
            <a className={styles.card} onClick={onRowClick}>
                <div className={styles.cardinner}>
                    <LocalCarWash sx={{fontSize: 42}}/>
                    <div className={styles.cardcontent}>
                        <div className={styles.bullet}>
                            <span className={styles.bullet}>Versicherungssumme € 10 Mio.</span>
                            <span className={styles.bullet}>Kein Freischaden</span>
                            <span className={styles.bullet}>Kein Rechtsschutz inkludiert</span>
                        </div>
                    </div>
                </div>
                <div className={styles.cardinner}>
                    <div className={styles.review}><Star/><StarOutline/><StarOutline/><StarOutline/><StarOutline/></div>
                    <div className={styles.price}>ab <br/>100,00 €</div>
                </div>
                <Button onClick={onRowClick} variant="contained" className={styles.buttonmobile}>Details</Button>
            </a>
        </div>);
    };
    return (
        <div className={styles.wrapper}>
            <Link className={styles.back} to="/"><ArrowBack/> Zurück</Link>
            <div className={styles.header}>
                <h2 style={{margin: '0'}}>Versicherungsoptionen</h2>
                <FilterAlt sx={{fontSize: 30}} aria-label="Filter"/>
            </div>
            {breakpoints.mobile ? renderMobile() : renderTabletDesktop()}
        </div>
    );

};

export default StepTwo;
