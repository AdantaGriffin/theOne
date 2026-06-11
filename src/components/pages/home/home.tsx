import styles from './home.module.scss';
import { Link } from 'react-router-dom';
import Tabs from '../../tabs/tabs';
import Navigation from '../../navigation/navigation';
import { useApi } from '../../api/api';

function Home(){
    const {name, age, weight, height, stats} = useApi();
    console.log(stats.pushCount)
    {/*useEffect(()=> {
        async function setData(){
            if(name && age && weight && height){
            setName(name);
            setAge(age);
            setWeight(weight);
            setHeight(height)}
        }
        setData();
    }, [])*/}
    return(
        <>
            <section className={styles.home}>

                <div className={styles.header}>Welcome back, {name ? name : ""}</div>

                <div className={styles.body}>

                    <div className={styles.userData}>

                        <div className={styles.caption}>
                            <h2>
                                <p>
                                    EVERY DAY PUSH CLOSER TO 
                                    <br></br>
                                    <span className={styles.red}>.BEING STRONG</span>
                                </p>
                            </h2>
                        </div>

                        <div className={styles.id}>
                            <ul className={styles.idList}>
                                <li>
                                    <div className={styles.age}>age</div>
                                    <div className={styles.userAge}>{age ? age : ""}</div>
                                </li>
                                <li>
                                    <div>weight</div>
                                    <div className={styles.userWeight}>{weight ? weight : ""}</div>
                                </li>
                                <li>
                                    <div>height</div>
                                    <div className={styles.userHeight}>{height ? height : ""}</div>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className={styles.userStats}>
                        <div className={styles.days}>
                            <div>
                                <p>TOTAL</p>
                                <p>{stats.checkIn}</p>
                            </div>
                            <div>
                                <p>CONSECUTIVE</p>
                                <p>{stats.checkIn}</p>
                            </div>
                        </div>
                        <hr className={styles.hr}></hr>
                        <div className={styles.numbers}>
                            <div className={styles.number}>
                                <p>PUSH</p>
                                <p>{stats.pushCount}</p>
                            </div>
                            <hr></hr>
                            <div className={styles.number}>
                                <p>PULL</p>
                                <p>{stats.pullCount}</p>
                            </div>
                            <hr></hr>
                            <div className={styles.number}>
                                <p>CORE</p>
                                <p>{stats.coreCount}</p>
                            </div>
                            <hr></hr>
                            <div className={styles.number}>
                                <p>LEGS</p>
                                <p>{stats.legsCount}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.userTabs}>
                        <Tabs/>
                    </div>

                    <div className={styles.userLink}>
                        <Link to="/difficulty">START NEW SESSION</Link>
                    </div>
                </div>
                
                <Navigation/>
            </section>
        </>
    )
};

export default Home;