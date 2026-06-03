import styles from './display.module.scss';
import { useParams, Link } from 'react-router-dom';

function Display(){
    const {id} = useParams();
    return(
        <>
            <section className={styles.display}>
                <header>name of exercise {id}</header>

                <div className={styles.image}>
                    <img src="null" alt="name image"/>
                </div>

                <div className={styles.parts}>body parts</div>

                <div className={styles.instructions}>
                    <ol className={styles.instructionsList}>
                        <li>instructions</li>
                        <li>instructions</li>
                        <li>instructions</li>
                        <li>instructions</li>
                    </ol>
                </div>

                <Link to="/exercises" className={styles.addButton}>add to workout</Link>

            </section>
        </>
    )
};

export default Display;