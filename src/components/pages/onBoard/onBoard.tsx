import styles from './onBoard.module.scss';
import { Link } from 'react-router-dom';

function OnBoard(){
    return(
        <>
            <section className={styles.onBoard}>

                <div className={styles.image}>
                    <img src="./onBoard1.jpg" alt="on board image 1"/>
                </div>

                <div className={styles.body}>
                    <h2 className={styles.main}>
                        <p>EVERY DAY.</p>
                        <p>ONE PUNCH CLOSER.</p>
                    </h2>

                    <div className={styles.heading}>
                        <p className={styles.sub}>Track your works outs and become your best self.</p>
                    </div>

                    <div className={styles.skipNext}>
                        <Link to="/home" className={styles.skip}>SKIP</Link>
                        <Link to="/details" className={styles.next}>NEXT</Link>
                    </div>
                    
                </div>

            </section>
        </>
    )
};

export default OnBoard;