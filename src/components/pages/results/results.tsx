import styles from './results.module.scss';
import Navigation from '../../navigation/navigation';

function Results(){
    return(
        <>
            <section className={styles.results}>

                <header>PROGRESS</header>

                <ul className={styles.progressList}>
                    <li>week</li>
                    <li>month</li>
                    <li>year</li>
                    <li>reps</li>
                    <li>sets</li>

                </ul>

                <div className={styles.frequencyGraph}>frequency graph</div>

                <div className={styles.chart}>muscle group breakdown</div>

                <Navigation/>

            </section>
        </>
    )
};

export default Results;