import styles from './home.module.scss';
import { Link } from 'react-router-dom';
import Tabs from '../../tabs/tabs';
import Navigation from '../../navigation/navigation';
import { useApi } from '../../api/api';

function Home(){
    const {name, setName, age, setAge,  weight, setWeight,  height, setHeight } = useApi();
    
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
                                <p>0</p>
                            </div>
                            <div>
                                <p>CONSECUTIVE</p>
                                <p>0</p>
                            </div>
                        </div>
                        <hr className={styles.hr}></hr>
                        <div className={styles.numbers}>
                            <div className={styles.number}>
                                <p>PUSH</p>
                                <p>0</p>
                            </div>
                            <hr></hr>
                            <div className={styles.number}>
                                <p>PULL</p>
                                <p>0</p>
                            </div>
                            <hr></hr>
                            <div className={styles.number}>
                                <p>CORE</p>
                                <p>0</p>
                            </div>
                            <hr></hr>
                            <div className={styles.number}>
                                <p>LEGS</p>
                                <p>0</p>
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