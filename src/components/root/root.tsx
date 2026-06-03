import styles from './root.module.scss';
import { Outlet } from "react-router-dom";


function Root(){
    return(
        <>
        <div className={styles.root}>
            <Outlet/>
        </div>
        </>
    )
};

export default Root;