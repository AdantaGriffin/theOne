import styles from './exercises.module.scss';
import { NavLink, Link } from 'react-router-dom';
import Navigation from '../../navigation/navigation';

function Exercises(){
    const id = 'fictitious until changed';
    return(
        <>
            <section className={styles.exercise}>
                <header>EXERCISES</header>
                <nav className={styles.navigation}>
                    <ul className={styles.navigationList}>
                        <li><NavLink to="">all</NavLink></li>
                        <li><NavLink to="">push</NavLink></li>
                        <li><NavLink to="">pull</NavLink></li>
                        <li><NavLink to="">core</NavLink></li>
                        <li><NavLink to="">squat</NavLink></li>
                    </ul>
                </nav>

                <ul className={styles.exerciseList}>
                    <li className={styles.exerciseCard}>
                        <Link to={`/display/${id}`}>
                            <div>image</div>
                            <div>exercise fetched from json</div>
                        </Link>
                    </li>
                </ul>

                <Navigation/>
                
            </section>
        </>
    )
};

export default Exercises;