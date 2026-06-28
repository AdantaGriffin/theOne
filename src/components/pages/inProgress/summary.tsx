import styles from './summary.module.scss';
import { Link } from 'react-router-dom';
import { useApi } from '../../api/api';

function Summary(){
    const {routine, stats, routineName, dayPushCount, dayPullCount, dayCoreCount, dayLegsCount, prevSessions, setPrevSessions, sets} = useApi();
    
    console.log(routine.exercises.length)
    console.log(routine)
    console.log(prevSessions)

    const saveRoutine = () => {
    if (routine.exercises.length === 0) return;

    const session = {
        id: Date.now().toString(),
        name: routineName,
        date: new Date().toLocaleDateString(),
        stats,
        routine,
        sets: sets,
    };

    setPrevSessions(prev => [...prev, session]);
};
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
                            <p className={styles.date}>{new Date().toLocaleDateString()}</p>
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

                    <Link 
                    onClick={saveRoutine}
                    className={styles.finish} to="/home"
                    >finish</Link>

                </div>
            </section>
        </>
    )
};

export default Summary;