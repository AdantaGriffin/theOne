import styles from './inProgress.module.scss';

import { Link,} from 'react-router-dom';

function InProgress(){
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
                    <div className={styles.name}>name of exercise that up</div>
                    <div className={styles.image}>image of exercise that up</div>
                    <div className={styles.rep}>total reps to do</div>
                    <Link className={styles.rest} to="/rest">rest</Link>
                    <Link className={styles.done} to="/summary">done</Link>
                </div>
            </section>
        </>
    )
};

export default InProgress;