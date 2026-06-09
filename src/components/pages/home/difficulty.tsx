import styles from './difficulty.module.scss';
import { Link } from 'react-router-dom';
import Navigation from '../../navigation/navigation';
import { useApi } from '../../api/api';

function Difficulty(){
    const { difficulty, setDifficulty, sets, setSets, } = useApi();
    console.log(difficulty)
    console.log(sets);
    return(
        <>
            <section className={styles.difficulty}>

                <div className={styles.header}>
                    <h1>TheOne</h1>
                </div>

                <div className={styles.body}>
                    <h3>select difficulty</h3>
                    <ul className={styles.difficultyList}>
                        <li><Link to="" onClick={() => {setSets("10"); setDifficulty("easy")}}>Easy</Link></li>
                        <li><Link to="" onClick={() => {setSets("15"); setDifficulty("medium")}}>Medium</Link></li>
                        <li><Link to="" onClick={() => {setSets("20"); setDifficulty("hard")}}>Hard</Link></li>
                        <li><Link to="" onClick={() => {setSets("25"); setDifficulty("theOne")}}>TheOne</Link></li>
                    </ul>

                    <Link className={styles.nextLink} to="/start">next</Link>
                </div>
                
                <Navigation/>
                
            </section>
        </>
    )
};

export default Difficulty;