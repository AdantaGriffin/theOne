import styles from './session.module.scss';
import { useParams } from 'react-router-dom';
import { useApi } from '../../api/api';

function Session(){
    const {id} = useParams();
    const {prevSessions, sets} = useApi();
    console.log(id)
    console.log(prevSessions);

    const session = prevSessions.filter(x => x.id === id?.toString());
    console.log(session);

    
    return(
        <>
            <section className={styles.session}>
                <p className={styles.name}>session :{session[0].name}</p>
                
                <p className={styles.date}>date: {session[0].date}</p>
                
                <p className={styles.reps}>{sets} reps for all exercsises</p>
                
                <p className={styles.text}>exercises:</p>
                
                <ul className={styles.exercises}>
                    {session[0].routine.exercises.map(x => (
                        <li key={x.id}>{x.name}</li>
                    ))}
                </ul>
                
                <div className={styles.comment}>GREAT WORK KEEP PUSHING</div>
            </section>
        </>
    )
};

export default Session