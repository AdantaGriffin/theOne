import styles from './programDetail.module.scss';
import { useParams } from 'react-router-dom';
import Navigation from '../../navigation/navigation';

function ProgramDetails(){
    const {id} = useParams();
    return(
        <>
            <section className={styles.programDetails}>

                <div className={styles.programHeader}>
                    {'id: ' + id + ' name'}
                </div>

                <div className={styles.programBody}>
                    <ul className={styles.programList}>
                        <li>
                            <p>push</p>
                            <ul className={styles.pushList}>
                                <li>push ex</li>
                                <li>push ex</li>
                                <li>push ex</li>
                                <li>push ex</li>
                                <li>push ex</li>
                            </ul>
                        </li>
                        <li>
                            <p>pull</p>
                            <ul className={styles.pullList}>
                                <li>pull ex</li>
                                <li>pull ex</li>
                                <li>pull ex</li>
                                <li>pull ex</li>
                                <li>pull ex</li>
                            </ul>
                        </li>
                        <li>
                            <p>core</p>
                            <ul className={styles.coreList}>
                                <li>core ex</li>
                                <li>core ex</li>
                                <li>core ex</li>
                                <li>core ex</li>
                                <li>core ex</li>
                            </ul>
                        </li>
                        <li>
                            <p>legs</p>
                            <ul className={styles.legsList}>
                                <li>legs ex</li>
                                <li>legs ex</li>
                                <li>legs ex</li>
                                <li>legs ex</li>
                                <li>legs ex</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className={styles.programNav}>
                    <Navigation/>
                </div>

            </section>
        </>
    )
};

export default ProgramDetails;
