import styles from './profile.module.scss';

function Profile(){
    return(
        <>
            <section className={styles.profile}>
                <div>header with image</div>
                <div>age weight height</div>
                <div>
                    <ul>
                        settings / summary / goal / meter
                    </ul>
                </div>
            </section>
        </>
    )
};

export default Profile;