import styles from './programs.module.scss';
import { NavLink, Link } from 'react-router-dom';
import Navigation from '../../navigation/navigation';

function Programs(){
    return(
        <>
            <section className={styles.programs}>

                <header>PROGRAMS</header>

                <nav className={styles.navigation}>
                    <ul className={styles.navigationList}>
                        <li><NavLink to="">all</NavLink></li>
                        <li><NavLink to="">push</NavLink></li>
                        <li><NavLink to="">pull</NavLink></li>
                        <li><NavLink to="">core</NavLink></li>
                        <li><NavLink to="">squat</NavLink></li>
                    </ul>
                </nav>

                <ul className={styles.programsList}>
                    <li className={styles.programsCard}>
                        <Link className={styles.programsLink} to="/programDetails/:deets">
                            <div>The100</div>
                            <div>image</div>
                        </Link>
                    </li>
                    <li className={styles.programsCard}>
                        <Link className={styles.programsLink} to="/programDetails/:deets">
                            <div>text</div>
                            <div>image</div>
                        </Link>
                    </li>
                    <li className={styles.programsCard}>
                        <Link className={styles.programsLink} to="/programDetails/:deets">
                            <div>text</div>
                            <div>image</div>
                        </Link>
                    </li>
                    <li className={styles.programsCard}>
                        <Link className={styles.programsLink} to="/programDetails/:deets">
                            <div>text</div>
                            <div>image</div>
                        </Link>
                    </li>
                    <li className={styles.programsCard}>
                        <Link className={styles.programsLink} to="/programDetails/:deets">
                            <div>text</div>
                            <div>image</div>
                        </Link>
                    </li>
                </ul>
                
                <Navigation/>
            </section>
        </>
    )
};

export default Programs;