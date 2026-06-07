import styles from './programs.module.scss';
import { Link } from 'react-router-dom';
import Navigation from '../../navigation/navigation';
import { useApi } from '../../api/api';

function Programs(){
    const {programs} = useApi();
    console.log(programs)

    return(
        <>
            <section className={styles.programs}>

                <header>
                    <Link to="/home"><img src="/left-arrow.png" width="30px" height="30px" alt="back"/></Link>
                    <p>PROGRAMS</p>
                </header>

                <ul className={styles.programsList}>
                    {programs.map(x => (
                        <li 
                        className={styles.programsCard} 
                        key={x.id}>
                            <Link className={styles.programsLink} to={`/programDetails/${x.id}`}>
                                <div>{x.name}</div>
                                <div>image</div>
                            </Link>
                        </li>
                    ))}
                    {/*<li className={styles.programsCard}>
                        <Link className={styles.programsLink} to="/programDetails/:deets">
                            <div>The100</div>
                            <div>image</div>
                        </Link>
                    </li>
                    <li className={styles.programsCard}>
                        <Link className={styles.programsLink} to="/programDetails/:deets">
                            <div>text</div>
                            <div>image</div>
                        </Link>
                    </li>
                    <li className={styles.programsCard}>
                        <Link className={styles.programsLink} to="/programDetails/:deets">
                            <div>text</div>
                            <div>image</div>
                        </Link>
                    </li>
                    <li className={styles.programsCard}>
                        <Link className={styles.programsLink} to="/programDetails/:deets">
                            <div>text</div>
                            <div>image</div>
                        </Link>
                    </li>
                    <li className={styles.programsCard}>
                        <Link className={styles.programsLink} to="/programDetails/:deets">
                            <div>text</div>
                            <div>image</div>
                        </Link>
                    </li>*/}
                </ul>
                
                <Navigation/>
            </section>
        </>
    )
};

export default Programs;