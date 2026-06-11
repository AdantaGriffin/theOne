import styles from './exercises.module.scss';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Navigation from '../../navigation/navigation';
import { useApi } from '../../api/api';


function Exercises(){
    const navigate = useNavigate();
    const {exercises, filterExList, setFilterExList, sets, setPush, setPull, setCore, setLegs, setCardio, routine, setRoutine} = useApi();
    //console.log(filterExList)
    //console.log(exercises)

    const filterByType = exercises.filter(x => x.type2 === filterExList);
    //console.log(filterByType); list after filtering with button
    const list = filterExList === 'all' ? exercises : filterByType; 
    let count = 100 / Number(sets);

    //console.log(count, push, routine)
    
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
        navigate(-1);
      } 

      if (
        exercise.type2 === "pull" &&
        pullCount + 1 === count
      ) {
        setPull(true);
        navigate(-1);
      }
      if (
        exercise.type2 === "core" &&
        coreCount + 1 === count
      ) {
        setCore(true);
        navigate(-1);
      }
      if (
        exercise.type2 === "legs" &&
        legsCount + 1 === count
      ) {
        setLegs(true);
        navigate(-1);
      }
      if (
        exercise.type2 === "cardio" &&
        cardioCount + 1 === count
      ) {
        setCardio(true);
        navigate(-1);
      }

      setRoutine(prev => ({
        ...prev,
        exercises: [...prev.exercises, exercise]
      }));

    }
    return(
        <>
            <section className={styles.exercise}>
                <header>
                    <button onClick={() => navigate(-1)}><img src="/left-arrow.png" width="30px" height="30px" alt="back"/></button>
                    <p>EXERCISES</p>
                </header>
                <nav className={styles.navigation}>
                    <ul className={styles.navigationList}>
                        <li><NavLink onClick={() => setFilterExList('all')} to="">all</NavLink></li>
                        <li><NavLink onClick={() => setFilterExList('push')} to="">push</NavLink></li>
                        <li><NavLink onClick={() => setFilterExList('pull')} to="">pull</NavLink></li>
                        <li><NavLink onClick={() => setFilterExList('core')} to="">core</NavLink></li>
                        <li><NavLink onClick={() => setFilterExList('legs')} to="">legs</NavLink></li>
                        <li><NavLink onClick={() => setFilterExList('full')} to="">full</NavLink></li>
                    </ul>
                </nav>

                <div className={styles.listContainer}>
                    <ul className={styles.exerciseList}>
                        {list.map(x => {
                          const isSelected = routine.exercises.some(
                            exercise => exercise.id === x.id
                          );
                        
                          return (
                            <li
                              className={styles.exerciseItem}
                              key={x.id}
                            >
                              <button
                                onClick={() => addExercise(x)}
                                className={isSelected ? styles.addBorder : styles.addButton}
                              >
                                <img
                                  src="/plus.png"
                                  width="10px"
                                  height="10px"
                                  alt="add"
                                />
                              </button>
                          
                              <Link
                                className={styles.exerciseCard}
                                to={`/display/${x.id}`}
                              >
                                <div>{x.name}</div>
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                </div>

                <Navigation/>
                
            </section>
        </>
    )
};

export default Exercises;