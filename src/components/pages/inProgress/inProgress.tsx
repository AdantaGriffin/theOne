import styles from './inProgress.module.scss';
import { Link,} from 'react-router-dom';
import { useApi } from '../../api/api';

function InProgress(){
    const {routine, sets, currentExerciseIndex, rest} = useApi();
    //console.log(routine.exercises[0].name)
    console.log(rest)
    const currentExercise = routine.exercises[currentExerciseIndex];

    //create function to reset clock and nullify ongoing stats if bac is pressed while working out. set prompt verification.
    return(
        <>
            <section className={styles.inProgress}>
                <div className={styles.header}>
                    <div className={styles.back}>
                        <Link to="/start">
                            <img src="/left-arrow.png" alt="go back" />
                        </Link>
                    </div>
                    <div>program name || workout</div>
                </div>
                <div className={styles.body}>
                    <div className={styles.name}>{currentExercise?.name}</div>
                    <div className={styles.image}><img src={currentExercise?.image} width="100%" height="100%" alt="ex image"/></div>
                    <div className={styles.rep}><p className={styles.reps}>{sets}</p><p>reps</p></div>
                    <Link className={styles.rest} to="/rest">rest</Link>
                    <Link className={styles.done} to="/summary">done</Link>
                </div>
            </section>
        </>
    )
};

export default InProgress;