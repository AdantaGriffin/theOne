import styles from './difficulty.module.scss';
import { Link } from 'react-router-dom';
import Navigation from '../../navigation/navigation';
import { useApi } from '../../api/api';

function Difficulty(){
    const { difficulty, setDifficulty} = useApi();
    console.log(difficulty)
    return(
        <>
            <section className={styles.difficulty}>

                <div className={styles.header}>
                    <h1>TheOne</h1>
                </div>

                <div className={styles.body}>
                    <h3>select difficulty</h3>
                    <ul className={styles.difficultyList}>
                        <li><button onClick={() => setDifficulty("easy")}>Easy</button></li>
                        <li><button onClick={() => setDifficulty("medium")}>Medium</button></li>
                        <li><button onClick={() => setDifficulty("hard")}>Hard</button></li>
                        <li><button onClick={() => setDifficulty("one")}>TheOne</button></li>
                    </ul>

                    <Link className={styles.nextLink} to="/start">next</Link>
                </div>
                
                <Navigation/>
            </section>
        </>
    )
};

export default Difficulty;