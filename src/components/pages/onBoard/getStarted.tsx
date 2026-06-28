import styles from './getStarted.module.scss';
import { Link } from 'react-router-dom';
import { useApi } from '../../api/api';

function ObStart(){
    const {name, setName, age, setAge, height, setHeight, weight, setWeight} = useApi();
    //console.log(name, age, weight, height)
    return(
        <>
            <section className={styles.obStart}>

                <div className={styles.image}>
                    <img src="./obProfile.png" alt="on board image 3"/>
                </div>

                <div className={styles.body}>

                    <h2 className={styles.main}>Whats your name?</h2>
                    
                    <form className={styles.form}>
                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="name"/>
                        <input onChange={(e) => setAge(e.target.value)} value={age} type="text" placeholder="age"/>
                        <input onChange={(e) => setHeight(e.target.value)} value={height} type="text" placeholder="height"/>
                        <input onChange={(e) => setWeight(e.target.value)} value={weight} type="text" placeholder="weight"/>
                    </form>

                    <div className={styles.buttons}> {/*group into .heading and change in form. change link into input and requir all other inputs. js will use navigat to rerout on submit.*/}
                        <Link 
                        to="/home"
                        className={styles.getStarted}>GET STARTED</Link>
                        
                    </div>
                </div>

            </section>
        </>
    )
};

export default ObStart;