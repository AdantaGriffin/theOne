import styles from './start.module.scss';
import { Link } from 'react-router-dom';
import Navigation from '../../navigation/navigation';

function Start(){
    return(
        <>
            <section className={styles.start}>

                <div className={styles.header}>
                    <h1>TheOne</h1>
                </div>

                <div className={styles.body}>
                    <h3>start new session</h3>
                    <ul className={styles.exerciseComponentList}>
                        <li><Link to="">push</Link></li>
                        <li><Link to="">pull</Link></li>
                        <li><Link to="">core</Link></li>
                        <li><Link to="">legs</Link></li>
                        <li><Link to="">cardio</Link></li>
                        <li><Link to="">programs</Link></li>
                    </ul>
                    <Link className={styles.nextLink} to="/inProgress">start</Link>
                </div>

                

                <Navigation/>

            </section>
        </>
    )
};

export default Start;