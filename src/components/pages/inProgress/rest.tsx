import styles from './rest.module.scss';
import { Link } from 'react-router-dom';

function Rest(){
    return(
        <>
            <section className={styles.rest}>
                <div className={styles.header}>
                    <p>REST</p>
                </div>
                <div className={styles.clock}>
                    REST COUNT DOWN
                </div>
                <div className={styles.restButtons}>
                    <Link to="/inProgress">skip</Link>
                    <div>pause</div>
                </div>
            </section>
        </>
    )
};

export default Rest;