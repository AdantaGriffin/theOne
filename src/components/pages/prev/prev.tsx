import styles from './prev.module.scss';
import { NavLink, Link } from 'react-router-dom';
import Navigation from '../../navigation/navigation';

function Prev(){
    return(
        <>
            <section className={styles.prev}>
                <div className={styles.header}>PREVIOUS SESSIONS</div>

                <nav className={styles.navigation}>
                    <ul className={styles.navigationList}>
                        <li><NavLink to="">all</NavLink></li>
                        <li><NavLink to="">push</NavLink></li>
                        <li><NavLink to="">pull</NavLink></li>
                        <li><NavLink to="">core</NavLink></li>
                        <li><NavLink to="">squat</NavLink></li>
                    </ul>
                </nav>
                
                <ul className={styles.routineHistoryList}>
                    <li className={styles.routine}>
                        <Link
                        className={styles.routineCard}
                        to="">
                            <div>image</div>
                            <div>title date combo</div>
                            <div>check image</div>
                        </Link>
                    </li> 
                    <li className={styles.routine}>
                        <Link
                        className={styles.routineCard}
                        to="">
                            <div>image</div>
                            <div>title date combo</div>
                            <div>check image</div>
                        </Link>
                    </li> 
                    <li className={styles.routine}>
                        <Link
                        className={styles.routineCard}
                        to="">
                            <div>image</div>
                            <div>title date combo</div>
                            <div>check image</div>
                        </Link>
                    </li> 
                    <li className={styles.routine}>
                        <Link
                        className={styles.routineCard}
                        to="">
                            <div>image</div>
                            <div>title date combo</div>
                            <div>check image</div>
                        </Link>
                    </li>
                </ul>
                
                <Navigation/>
            </section>
        </>
    )
};

export default Prev;