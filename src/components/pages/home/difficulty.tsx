import styles from './difficulty.module.scss';
import { Link } from 'react-router-dom';
import Navigation from '../../navigation/navigation';
import { useApi } from '../../api/api';

function Difficulty(){
    const { difficulty, setDifficulty, sets, setSets,rest, setRest} = useApi();
    console.log(difficulty)
    console.log(rest);
    return(
        <>
            <section className={styles.difficulty}>

                <div className={styles.header}>
                    <h1>TheOne</h1>
                </div>

                <div className={styles.body}>
                    <h3>select difficulty</h3>
                    <ul className={styles.difficultyList}>
                        <li className={styles.listItem}><Link to="" onClick={() => {setSets("10"); setDifficulty("easy");setRest(90)}}>Easy</Link></li>
                        <li className={styles.listItem}><Link to="" onClick={() => {setSets("15"); setDifficulty("medium");setRest(60)}}>Medium</Link></li>
                        <li className={styles.listItem}><Link to="" onClick={() => {setSets("20"); setDifficulty("hard");setRest(45)}}>Hard</Link></li>
                        <li className={styles.listItem}><Link to="" onClick={() => {setSets("25"); setDifficulty("theOne");setRest(30)}}>TheOne</Link></li>
                    </ul>

                    <Link className={styles.nextLink} to="/start">next</Link>
                </div>
                
                <Navigation/>
                
            </section>
        </>
    )
};

export default Difficulty;