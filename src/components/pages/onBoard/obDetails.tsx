import styles from './obDetails.module.scss';
import { Link } from 'react-router-dom';

function ObDetails(){

    return(
        <>
            <section className={styles.obDetails}>

                <div className={styles.image}>
                    <img src="./onBoard2.jpg" alt="on board image 2"/>
                </div>

                <div className={styles.body}>
                    <h2 className={styles.main}>
                        <p>TRAIN LIKE A HERO</p>
                    </h2>

                    <div className={styles.heading}>
                        <p className={styles.sub}>Choose programs, follow routines and push your limit.</p>
                    </div>

                    <div className={styles.skipNext}>
                        <Link to="/home" className={styles.skip}>SKIP</Link>
                        <Link to="/obStart" className={styles.next}>NEXT</Link>
                    </div>
                </div>
            </section>
        </>
    )
};

export default ObDetails;