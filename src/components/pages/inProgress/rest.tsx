import styles from './rest.module.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../api/api';

function Rest(){
    const navigate = useNavigate();
    const {setCurrentExerciseIndex, rest, setRest, difficulty} = useApi();
    console.log(rest)
    function continueWorkout() {
        switch (difficulty) {
        case "easy":
            setRest(90);
            break;
        case "medium":
            setRest(60);
            break;
        case "hard":
            setRest(45);
            break;
        case "theOne":
            setRest(30);
            break;
    }

        setCurrentExerciseIndex(prev => prev + 1);
        navigate('/inProgress');
    }
    useEffect(() => {
        if (rest === 0){
            continueWorkout();
            return;
        }

        const timer = setInterval(() => {
            setRest(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [rest]);

    return(
        <>
            <section className={styles.rest}>
                <div className={styles.header}>
                    <p>REST</p>
                </div>
                <div className={styles.clock}>
                    <p className={styles.restCountdown}>
                        {rest}
                    </p>
                </div>
                <div className={styles.restButtons}>
                    <button 
                    onClick={continueWorkout}>skip</button>
                    <div>pause</div>
                </div>
            </section>
        </>
    )
};

export default Rest;