import styles from './display.module.scss';
import { useParams, Link } from 'react-router-dom';
import { useApi } from '../../api/api';
import Navigation from '../../navigation/navigation';

function Display(){
    const {id} = useParams();
    const{exercises} = useApi();
    //console.log(exercises[0]?.id);
    const filter = exercises.filter(x => x.id === Number(id));
    console.log(filter)

    
    return(
        <>
            <section className={styles.display}>
                <header>
                    <Link to="/exercises"><img src="/left-arrow.png" width="30px" height="30px" alt="back"/></Link>
                    <p>{filter[0]?.name}</p>
                </header>

                <div className={styles.image}>
                    <img src={filter[0]?.image} height="100%" width="100%" alt="name image"/>
                </div>

                <div className={styles.instructions}>
                    <ol className={styles.instructionsList}>
                        {filter[0]?.execution.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                        {/*<li>instructions</li>
                        <li>instructions</li>
                        <li>instructions</li>
                        <li>instructions</li>*/}
                    </ol>
                </div>

                <Link to="/exercises" className={styles.addButton}>add to workout</Link>
                
                <Navigation/>
            </section>
        </>
    )
};

export default Display;