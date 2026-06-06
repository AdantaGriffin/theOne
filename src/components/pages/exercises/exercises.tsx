import styles from './exercises.module.scss';
import { NavLink, Link } from 'react-router-dom';
import Navigation from '../../navigation/navigation';
import { useApi } from '../../api/api';


function Exercises(){
    const {exercises, filterExList, setFilterExList} = useApi();
    //console.log(filterExList)
    //console.log(exercises)
    const filterByType = exercises.filter(x => x.type2 === filterExList);
    //console.log(filterByType); list after filtering with button
    const list = filterExList === 'all' ? exercises : filterByType; 
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
                        <li><NavLink onClick={() => setFilterExList('legs')} to="">legs</NavLink></li>
                    </ul>
                </nav>

                <div className={styles.listContainer}>
                    <ul className={styles.exerciseList}>
                        
                        {list.map(x => (
                            <li 
                            key={x.id}>
                                <Link className={styles.exerciseCard} to={`/display/${x.id}`}>
                                    <img height="50px" width="100px" src={x.image} alt={`${x.name} image`}/>
                                    <div>{x.name}</div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <Navigation/>
                
            </section>
        </>
    )
};

export default Exercises;