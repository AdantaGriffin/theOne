import styles from './start.module.scss';
import { Link } from 'react-router-dom';
import Navigation from '../../navigation/navigation';

function Start(){
    return(
        <>
            <section className={styles.start}>

                <div className={styles.header}>
                    <h1>TheOne</h1>
                </div>

                <div className={styles.body}>
                    <h3>start new session</h3>
                    <ul className={styles.exerciseComponentList}>
                        <li><button>push</button></li>
                        <li><button>pull</button></li>
                        <li><button>core</button></li>
                        <li><button>legs</button></li>
                        <li><button>programs</button></li>
                    </ul>
                </div>

                <Link className={styles.nextLink} to="/inProgress">start</Link>

                <Navigation/>
            </section>
        </>
    )
};

export default Start;