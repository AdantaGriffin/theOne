import styles from './tabs.module.scss';
import { Link } from 'react-router-dom';

function Tabs(){
    return(
        <>
            <section className={styles.tabs}>
                <ul className={styles.tabsList}>
                    <li><Link to="/previous">PREV</Link></li>
                    <li><Link to="/exercises">EXERCISES</Link></li>
                    <li><Link to="/programs">PROGRAMS</Link></li>
                </ul>
            </section>
        </>
    )
};

export default Tabs;