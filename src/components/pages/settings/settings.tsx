import styles from './settings.module.scss';

function Settings(){
    return(
        <>
            <section className={styles.settings}>
                <ul className={styles.settingList}>
                    <li>units</li>
                    <li>dark mode</li>
                    <li>help & support</li>
                    <li>contact developer</li>
                </ul>
            </section>
        </>
    )
};

export default Settings