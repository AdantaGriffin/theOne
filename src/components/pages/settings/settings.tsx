import styles from './settings.module.scss';
import Navigation from '../../navigation/navigation';

function Settings(){
    return(
        <>
            <section className={styles.settings}>
                <ul className={styles.settingList}>
                    <li>
                        <p>units</p>
                        <label className={styles.switch}>
                          <input type="checkbox"/>
                          <span className={styles.slider}></span>
                        </label>
                    </li>
                    <li>
                        <p>dark mode</p>
                        <label className={styles.switch}>
                          <input type="checkbox"/>
                          <span className={styles.slider}></span>
                        </label>
                    </li>
                    <li>help & support</li>
                    <li>contact developer</li>
                </ul>
                <Navigation/>
            </section>
        </>
    )
};

export default Settings