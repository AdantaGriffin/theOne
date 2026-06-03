import styles from './difficulty.module.scss';
import { Link } from 'react-router-dom';
import Navigation from '../../navigation/navigation';

function Difficulty(){

    return(
        <>
            <section className={styles.difficulty}>
                <div className={styles.header}>
                    <h1>TheOne</h1>
                </div>

                <div className={styles.body}>
                    <h3>select difficulty</h3>
                    <ul className={styles.difficultyList}>
                        <li><button>Easy</button></li>
                        <li><button>Medium</button></li>
                        <li><button>Hard</button></li>
                        <li><button>TheOne</button></li>
                    </ul>
                </div>

                <Link className={styles.nextLink} to="/start">next</Link>

                <Navigation/>
            </section>
        </>
    )
};

export default Difficulty;