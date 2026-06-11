import styles from './results.module.scss';
import Navigation from '../../navigation/navigation';
import { useApi } from '../../api/api';

function Results(){
    return(
        <>
            <section className={styles.results}>

                <header>PROGRESS</header>

                <div className={styles.body}>
                    <ul className={styles.progressList}>
                        <li>week</li>
                        <li>month</li>
                        <li>year</li>
                        <li>reps</li>
                        <li>sets</li>
                    </ul>

                    <div className={styles.frequencyGraph}>frequency graph</div>

                    <div className={styles.chart}>
                        
                    </div>
                </div>

                <Navigation/>

            </section>
        </>
    )
};

export default Results;