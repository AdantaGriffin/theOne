import styles from './results.module.scss';

import { Link } from 'react-router-dom';

function Results(){
    return(
        <>
            <section className={styles.results}>
                <div>header</div>
                <div>nav filter</div>
                <div>frequency graph</div>
                <div>muscle group breakdown</div>
                <div>
                    <ul>
                        <Link to="/home"></Link>
                    </ul>
                </div>
            </section>
        </>
    )
};

export default Results;