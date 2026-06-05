import styles from './exercises.module.scss';
import { NavLink, Link, useParams } from 'react-router-dom';
import Navigation from '../../navigation/navigation';
import { useApi } from '../../api/api';


function Exercises(){
    const {exercises, filterExList, setFilterExList} = useApi();
    console.log(filterExList)
    //console.log(exercises)
    
    return(
        <>
            <section className={styles.exercise}>
                <header>EXERCISES</header>
                <nav className={styles.navigation}>
                    <ul className={styles.navigationList}>
                        <li><NavLink onClick={() => setFilterExList('all')} to="">all</NavLink></li>
                        <li><NavLink onClick={() => setFilterExList('push')} to="">push</NavLink></li>
                        <li><NavLink onClick={() => setFilterExList('pull')} to="">pull</NavLink></li>
                        <li><NavLink onClick={() => setFilterExList('core')} to="">core</NavLink></li>
                        <li><NavLink onClick={() => setFilterExList('legs')} to="">squat</NavLink></li>
                    </ul>
                </nav>

                <div className={styles.listContainer}>
                    <ul className={styles.exerciseList}>
                        {exercises.map(x => (
                            <li 
                            key={x.id}>
                                <Link className={styles.exerciseCard} to={`/display/${x.id}`}>
                                    <img height="50px" width="100px" src={x.image} alt={`${x.name} image`}/>
                                    <div>{x.name}</div>
                                </Link>
                            </li>
                        ))}
                        {/*<li>
                            <Link className={styles.exerciseCard} to={`/display/${id}`}>
                                <div>image</div>
                                <div>exercise fetched from json</div>
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.exerciseCard} to={`/display/${id}`}>
                                <div>image</div>
                                <div>exercise fetched from json</div>
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.exerciseCard} to={`/display/${id}`}>
                                <div>image</div>
                                <div>exercise fetched from json</div>
                            </Link>
                        </li>*/}
                    </ul>
                </div>

                <Navigation/>
                
            </section>
        </>
    )
};

export default Exercises;