import styles from './profile.module.scss';
import Navigation from '../../navigation/navigation';

function Profile(){
    return(
        <>
            <section className={styles.profile}>

                <div className={styles.header}>
                    <img src="null" alt="profile image"/>
                    <div className={styles.name}>
                        <p className={styles.userName}>Name</p>
                        <p className={styles.status}>just getting started</p>
                    </div>
                </div>

                <div className={styles.body}>
                    <div className={styles.details}>
                        <p>dob</p>
                        <p>weight</p>
                        <p>height</p>
                    </div>

                    <div className={styles.list}>
                        <ul className={styles.profileList}>
                            <li>settings</li>
                            <li>summary</li>
                            <li>goal</li>
                            <li>meter</li>
                            <li>progress gallery</li>
                            <li>settings</li>
                        </ul>
                    </div>
                </div>
                <Navigation/>
            </section>
        </>
    )
};

export default Profile;