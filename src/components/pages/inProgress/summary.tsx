import styles from './summary.module.scss';

import { Link } from 'react-router-dom';

function Summary(){
    return(
        <>
            <section className={styles.summary}>
                <div className={styles.header}>
                    <div className={styles.back}>
                        <Link to="/start">
                            <img src="/left-arrow.png" alt="go back" />
                        </Link>
                    </div>
                    <div className={styles.headerTitle}>SESSION SUMMARY</div>
                </div>
                
                <div className={styles.body}>
                    <div className={styles.image}>
                        <div>image</div>
                        <p>GREAT WORK</p>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.header}>
                            <p className={styles.name}>workout name</p>
                            <p className={styles.date}>date</p>
                        </div>
                        <div className={styles.statsData}>
                            <div className={styles.statEx}>exercise #</div>
                            <div className={styles.statTot}>total exs</div>
                            <div className={styles.statReps}>total reps</div>
                            <div className={styles.statGoal}>goal completion bar</div>
                        </div>
                    </div>

                    <Link className={styles.finish} to="/home">finish</Link>

                </div>
            </section>
        </>
    )
};

export default Summary;