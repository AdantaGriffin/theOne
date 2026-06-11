import styles from './navigation.module.scss';
import { NavLink } from 'react-router-dom';

function Navigation(){
    return(
        <>
            <section className={styles.navigation}>
                <ul className={styles.navigationList}>
                    <li>
                        <NavLink className={({isActive}) => isActive ? styles.active : styles.inactive} to="/home">
                            <img src="/home.svg"/>
                            <p>home</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? styles.active : styles.inactive} to="/results">
                            <img src="/stat.svg"/>
                            <p>progress</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? styles.active : styles.inactive} to="/profile">
                            <img src="/profile.svg"/>
                            <p>profile</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? styles.active : styles.inactive} to="/settings">
                            <img src="/settings.svg"/>
                            <p>settings</p>
                        </NavLink>
                    </li>
                </ul>
            </section>
        </>
    )
};

export default Navigation;