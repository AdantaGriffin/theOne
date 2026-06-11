import styles from './inProgress.module.scss';
import { Link,} from 'react-router-dom';
import { useApi } from '../../api/api';

function InProgress(){
    const {routine, sets, currentExerciseIndex, rest, routineName, stats, setStats, setDayPushCount, setDayPullCount, setDayCoreCount, setDayLegsCount} = useApi();
    //console.log(routine.exercises[0].name)
    //console.log(rest)
    //console.log(routine)
    console.log(stats)
    const currentExercise = routine?.exercises[currentExerciseIndex];
    //console.log(currentExercise.type2)
    //add 
    const addCount = () => {
    switch (currentExercise?.type2) {
        case 'push':
            setDayPushCount(prev => prev + Number(sets));
            setStats(prev => ({
                ...prev,
                pushCount: prev.pushCount + Number(sets)
            }));
            break;

        case 'pull':
            setDayPullCount(prev => prev + Number(sets));
            setStats(prev => ({
                ...prev,
                pullCount: prev.pullCount + Number(sets)
            }));
            break;

        case 'core':
            setDayCoreCount(prev => prev + Number(sets));
            setStats(prev => ({
                ...prev,
                coreCount: prev.coreCount + Number(sets)
            }));
            break;

        case 'legs':
            setDayLegsCount(prev => prev + Number(sets));
            setStats(prev => ({
                ...prev,
                legsCount: prev.legsCount + Number(sets)
            }));
            break;

        default:
            break;
    }
};
    //create function to reset clock and nullify ongoing stats if bac is pressed while working out. set prompt verification.
    return(
        <>
            <section className={styles.inProgress}>
                <div className={styles.header}>
                    <div className={styles.routineName}>Workout: {routineName}</div>
                    <p>{currentExercise?.type2}</p>
                </div>
                <div className={styles.body}>
                    <div className={styles.name}>{currentExercise?.name}</div>
                    <div className={styles.image}><img src={currentExercise?.image} width="100%" height="100%" alt="ex image"/></div>
                    <div className={styles.rep}><p className={styles.reps}>{sets}</p><p>reps</p></div>
                    <div className={styles.userLink}>
                        <Link onClick={addCount} className={styles.rest} to="/rest">rest</Link>
                        <Link className={styles.done} to="/summary">quit</Link>
                    </div>
                </div>
            </section>
        </>
    )
};

export default InProgress;