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
                <header>
                    <Link to="/home"><img src="/left-arrow.png" width="30px" height="30px" alt="back"/></Link>
                    <p>EXERCISES</p>
                </header>
                <nav className={styles.navigation}>
                    <ul className={styles.navigationList}>
                        <li><NavLink onClick={() => setFilterExList('all')} to="">all</NavLink></li>
                        <li><NavLink onClick={() => setFilterExList('push')} to="">push</NavLink></li>
                        <li><NavLink onClick={() => setFilterExList('pull')} to="">pull</NavLink></li>
                        <li><NavLink onClick={() => setFilterExList('core')} to="">core</NavLink></li>
                        <li><NavLink onClick={() => setFilterExList('legs')} to="">legs</NavLink></li>
                        <li><NavLink onClick={() => setFilterExList('full')} to="">full</NavLink></li>
                    </ul>
                </nav>

                <div className={styles.listContainer}>
                    <ul className={styles.exerciseList}>
                        
                        {list.map(x => (
                            <li 
                            className={styles.exerciseItem}
                            key={x.id}>
                                <button className={styles.addButton}><img src="/plus.png" width="10px" height="10px" alt="add"/></button>
                                <Link className={styles.exerciseCard} to={`/display/${x.id}`}>
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