import styles from './summary.module.scss';
import { Link } from 'react-router-dom';
import { useApi } from '../../api/api';

function Summary(){
    const {routine, stats, routineName, checkIn, dayPushCount, dayPullCount, dayCoreCount, dayLegsCount} = useApi();
    
    console.log(routine.exercises.length)
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
                        <div><img src="./trophy.png" width="75px" height="90px" alt="trophy"/></div>
                        <p>GREAT WORK</p>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.header}>
                            <p className={styles.name}>{routineName}</p>
                            <p className={styles.date}>date</p>
                        </div>
                        <div className={styles.statsData}>
                            <div className={styles.statEx}>{stats.checkIn}</div>
                            <div className={styles.statTot}>{routine.exercises.length} exercises</div>
                            <div className={styles.statReps}>
                                {dayPushCount + dayPullCount + dayCoreCount + dayLegsCount + " reps"}
                            </div>
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