import styles from './getStarted.module.scss';
import { Link } from 'react-router-dom';

function ObStart(){
    
    return(
        <>
            <section className={styles.obStart}>

                <div className={styles.image}>
                    <img src="./obProfile.png" alt="on board image 3"/>
                </div>

                <div className={styles.body}>

                    <h2 className={styles.main}>Whats your name?</h2>
                    
                    <form className={styles.form}>
                        <input  type="text" placeholder="name"/>
                        <input  type="text" placeholder="age"/>
                        <input  type="text" placeholder="height"/>
                        <input  type="text" placeholder="weight"/>
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