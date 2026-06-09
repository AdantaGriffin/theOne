import styles from './start.module.scss';
import { NavLink } from 'react-router-dom';
import Navigation from '../../navigation/navigation';
import { useApi } from '../../api/api';

function Start(){
    const { setFilterExList, push, pull, core, legs, cardio, sets} = useApi();
    //console.log(filterByType);
    console.log(push)
    let count = 100 / Number(sets);
    return(
        <>
            <section className={styles.start}>

                <div className={styles.header}>
                    <h1>TheOne</h1>
                </div>

                <div className={styles.body}>
                    <h3>start new session</h3>
                    <p>select {count} exercises in each category.</p>
                    <ul className={styles.exerciseComponentList}>
                        <li><NavLink className={push ? styles.pushActive : styles.inactive} onClick={() => setFilterExList('push')} to={`/exercises`}>push</NavLink></li>
                        <li><NavLink className={pull ? styles.pullActive : styles.inactive} onClick={() => setFilterExList('pull')} to={`/exercises`}>pull</NavLink></li>
                        <li><NavLink className={core ? styles.coreActive : styles.inactive} onClick={() => setFilterExList('core')} to={`/exercises`}>core</NavLink></li>
                        <li><NavLink className={legs ? styles.legsActive : styles.inactive} onClick={() => setFilterExList('legs')} to={`/exercises`}>legs</NavLink></li>
                        <li><NavLink className={cardio ? styles.cardioActive : styles.inactive} onClick={() => setFilterExList('cardio')} to={`/exercises`}>cardio</NavLink></li>
                        <li><NavLink onClick={() => setFilterExList('programs')} to={`/exercises`}>programs</NavLink></li>
                    </ul>
                    <NavLink className={pull && push && core && legs ? styles.startActive : styles.nextLink} to="/inProgress">start</NavLink>
                </div>

                

                <Navigation/>

            </section>
        </>
    )
};

export default Start;