import styles from './prev.module.scss';
import { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Navigation from '../../navigation/navigation';
import { useApi } from '../../api/api';

function Prev(){
    const {prevSessions, setPrevSessions} = useApi();
    //console.log(prevSessions)
    useEffect(() => {
        async function getPrevSessions(){
            const response = await fetch('/previousSessions.json');
            const result = await response.json();
            console.log(result.previousSessions)
            setPrevSessions(result.previousSessions);
        }
        getPrevSessions()
    }, []);
    return(
        <>
            <section className={styles.prev}>
                <header className={styles.header}>
                    <Link to="/home"><img src="/left-arrow.png" width="30px" height="30px" alt="back"/></Link>
                    <p>PREVIOUS SESSIONS</p>
                </header>
                
                <ul className={styles.routineHistoryList}>
                    {prevSessions.length > 1 ? prevSessions.map(x => (
                        <li
                        key={x.id} 
                        className={styles.routine}>
                            <NavLink
                            className={styles.routineCard}
                            to="">
                                <div>{x.name}</div>
                                <div>
                                    <p className={styles.date}>{x.date}</p>
                                </div>
                                <div className={styles.check}>
                                    <img src="check-mark.png" height="20px" width="20px" alt="check"/>
                                </div>
                            </NavLink>
                        </li>
                    )) 
                    
                    : 
                    
                    <Link className={styles.startNew} to="/difficulty">Start your first sessions now</Link>}
                    {/*<li className={styles.routine}>
                        <NavLink
                        className={styles.routineCard}
                        to="">
                            <div>image</div>
                            <div>title date combo</div>
                            <div>check image</div>
                        </NavLink>
                    </li> 
                    <li className={styles.routine}>
                        <NavLink
                        className={styles.routineCard}
                        to="">
                            <div>image</div>
                            <div>title date combo</div>
                            <div>check image</div>
                        </NavLink>
                    </li> 
                    <li className={styles.routine}>
                        <NavLink
                        className={styles.routineCard}
                        to="">
                            <div>image</div>
                            <div>title date combo</div>
                            <div>check image</div>
                        </NavLink>
                    </li> 
                    <li className={styles.routine}>
                        <NavLink
                        className={styles.routineCard}
                        to="">
                            <div>image</div>
                            <div>title date combo</div>
                            <div>check image</div>
                        </NavLink>
                    </li>*/}
                </ul>
                
                <Navigation/>
            </section>
        </>
    )
};

export default Prev;