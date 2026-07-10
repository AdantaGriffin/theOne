import styles from './display.module.scss';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useApi } from '../../api/api';
import Navigation from '../../navigation/navigation';

function Display(){
    const navigate = useNavigate();
    const {id} = useParams();
    const {exercises, sets, setPush, setPull, setCore, setLegs, setCardio, routine, setRoutine} = useApi();
    //console.log(exercises[0]?.id);
    const filter = exercises.filter(x => x.id === Number(id));
    console.log(filter)
    let count = 100 / Number(sets);

    function addExercise(exercise: any) {
      
      const pushCount = routine.exercises.filter(
        x => x.type2 === "push"
      ).length;

      const pullCount = routine.exercises.filter(
        x => x.type2 === "pull"
      ).length;

      const coreCount = routine.exercises.filter(
        x => x.type2 === "core"
      ).length;

      const legsCount = routine.exercises.filter(
        x => x.type2 === "legs"
      ).length;

      const cardioCount = routine.exercises.filter(
        x => x.type2 === "cardio"
      ).length;

      if (
        exercise.type2 === "push" &&
        pushCount + 1 === count 
      ) {
        setPush(true);
        navigate("/start");
      } 

      if (
        exercise.type2 === "pull" &&
        pullCount + 1 === count
      ) {
        setPull(true);
        navigate("/start");
      }
      if (
        exercise.type2 === "core" &&
        coreCount + 1 === count
      ) {
        setCore(true);
        navigate("/start");
      }
      if (
        exercise.type2 === "legs" &&
        legsCount + 1 === count
      ) {
        setLegs(true);
        navigate("/start");
      }
      if (
        exercise.type2 === "cardio" &&
        cardioCount + 1 === count
      ) {
        setCardio(true);
        navigate("/start");
      }

      setRoutine(prev => ({
        ...prev,
        exercises: [...prev.exercises, exercise]
      }));

    }

    return(
        <>
            <section className={styles.display}>
                <header>
                    <Link to="/exercises"><img src="/left-arrow.png" width="30px" height="30px" alt="back"/></Link>
                    <p>{filter[0]?.name}</p>
                </header>

                <div className={styles.image}>
                    <img src={filter[0]?.image} height="100%" width="100%" alt="name image"/>
                </div>

                <div className={styles.instructions}>
                    <ol className={styles.instructionsList}>
                        {filter[0]?.execution.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                        {/*<li>instructions</li>
                        <li>instructions</li>
                        <li>instructions</li>
                        <li>instructions</li>*/}
                    </ol>
                </div>

                <Link 
                to="/exercises" 
                onClick={() => addExercise(filter[0])}
                className={styles.addButton}>add to workout</Link>
                
                <Navigation/>
            </section>
        </>
    )
};

export default Display;