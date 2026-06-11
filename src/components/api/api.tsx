import {useState, useEffect, createContext, useContext} from 'react';

type Data = {
    id: number;
    type: string;
    image: string;
    name: string;
    type2: string;
    execution:string[];
    muscles:string;
};

type Programs = {
    id: string;
    name: string;
    description: string;
    routine: string[];
}

type Sessions = {
    id: string;
    name: string;
    date: string;
    push:string[];
    pull:string[];
    core:string[];
    legs:string[];
    cardio:string[];
}

type Routine = {
  id: string;
  exercises: Data[];
};

type Stats = {
    pushCount: number;
    pullCount: number;
    coreCount: number;
    legsCount: number;
    checkIn: number;
};

type ApiContextType = {
    exercises: Data[];
    setExercises: React.Dispatch<React.SetStateAction<Data[]>>;
    filterExList: string;
    setFilterExList: React.Dispatch<React.SetStateAction<string>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    age: string;
    setAge: React.Dispatch<React.SetStateAction<string>>;
    weight: string;
    setWeight: React.Dispatch<React.SetStateAction<string>>;
    height: string;
    setHeight: React.Dispatch<React.SetStateAction<string>>;
    programs: Programs[];
    setPrograms: React.Dispatch<React.SetStateAction<Programs[]>>;
    difficulty: string;
    setDifficulty: React.Dispatch<React.SetStateAction<string>>;
    prevSessions: Sessions[];
    setPrevSessions: React.Dispatch<React.SetStateAction<Sessions[]>>;
    sets: string;
    setSets: React.Dispatch<React.SetStateAction<string>>;
    routine: Routine;
    setRoutine: React.Dispatch<React.SetStateAction<Routine>>;
    push: boolean;
    setPush: React.Dispatch<React.SetStateAction<boolean>>;
    pull: boolean;
    setPull: React.Dispatch<React.SetStateAction<boolean>>;
    core: boolean;
    setCore: React.Dispatch<React.SetStateAction<boolean>>;
    legs: boolean;
    setLegs: React.Dispatch<React.SetStateAction<boolean>>;
    cardio: boolean;
    setCardio: React.Dispatch<React.SetStateAction<boolean>>;
    currentExerciseIndex: number;
    setCurrentExerciseIndex: React.Dispatch<React.SetStateAction<number>>;
    rest: number;
    setRest: React.Dispatch<React.SetStateAction<number>>;
    routineName: string;
    setRoutineName: React.Dispatch<React.SetStateAction<string>>;
    pause: boolean;
    setPause: React.Dispatch<React.SetStateAction<boolean>>;
    checkIn: number;
    setCheckIn: React.Dispatch<React.SetStateAction<number>>;
    stats: Stats;
    setStats: React.Dispatch<React.SetStateAction<Stats>>;
    dayPushCount: number;
    setDayPushCount: React.Dispatch<React.SetStateAction<number>>;
    dayPullCount: number;
    setDayPullCount: React.Dispatch<React.SetStateAction<number>>;
    dayCoreCount: number;
    setDayCoreCount: React.Dispatch<React.SetStateAction<number>>;
    dayLegsCount: number;
    setDayLegsCount: React.Dispatch<React.SetStateAction<number>>;
};


const ApiContext = createContext<ApiContextType | null>(null);

export function ApiProvider({ children }: { children: React.ReactNode }){
    
    //exercise data
    const [exercises, setExercises] = useState<Data[]>([]);
    useEffect(() => {
    async function getData(){
        const response = await fetch('/data.json');
        const result = await response.json();
        //console.log(result.data);
        setExercises(result.data)
    }
    getData()
    }, []);

    //nav filter for exersise list
    const [filterExList, setFilterExList] = useState("all");

    //profile states for name age height and weight;
    const [name, setName] = useState<string>(
        () => localStorage.getItem("name") || ""
    );
    const [age, setAge] = useState<string>(
        () => localStorage.getItem("age") || ""
    );
    const [weight, setWeight] = useState<string>(
        () => localStorage.getItem("weight") || ""
    );
    const [height, setHeight] = useState<string>(
        () => localStorage.getItem("height") || ""
    );

    // ongoing stats collection
    const [stats, setStats] = useState<Stats>(() => {
    const saved = localStorage.getItem("stats");
        try {
            return saved
                ? JSON.parse(saved)
                : {
                    pushCount: 0,
                    pullCount: 0,
                    coreCount: 0,
                    legsCount: 0,
                    checkIn: 0
                };
        } catch {
            return {
                pushCount: 0,
                pullCount: 0,
                coreCount: 0,
                legsCount: 0,
                checkIn: 0
            };
        }
    });
    const [checkIn, setCheckIn] = useState<number>(
        () => Number(localStorage.getItem("checkIn")) || 0);
    
    useEffect(() => {
        localStorage.setItem("name", name);
        localStorage.setItem("age", age);
        localStorage.setItem("weight", weight);
        localStorage.setItem("height", height);
        localStorage.setItem("stats", JSON.stringify(stats));
        localStorage.setItem("0", String(checkIn));

    }, [name, age, weight, height, stats, checkIn]);

    //previous session state management
    const [prevSessions, setPrevSessions] = useState<Sessions[]>([]);

    //programs api state
    const [programs, setPrograms] = useState<Programs[]>([]);
    useEffect(() => {
        async function getPrograms(){
            const response = await fetch('/programs.json');
            const result = await response.json();
            //console.log(result.programs)
            setPrograms(result.programs);
        }
        getPrograms();
    }, []);


    // routine state management
    const [difficulty, setDifficulty] = useState<string>("");
    const [sets, setSets] = useState<string>("0");
    const [push, setPush] = useState<boolean>(false);
    const [pull, setPull] = useState<boolean>(false);
    const [core, setCore] = useState<boolean>(false);
    const [legs, setLegs] = useState<boolean>(false);
    const [cardio, setCardio] = useState<boolean>(false);
    const [routine, setRoutine] = useState<Routine>(
        {
          id: "",
          exercises: []
        }
    );
    const [routineName, setRoutineName] = useState<string>("");
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const [rest, setRest] = useState(0);
    const [pause, setPause] = useState<boolean>(false);
    // just daily count
    const [dayPushCount, setDayPushCount] = useState<number>(0);
    const [dayPullCount, setDayPullCount] = useState<number>(0);
    const [dayCoreCount, setDayCoreCount] = useState<number>(0);
    const [dayLegsCount, setDayLegsCount] = useState<number>(0);
    return(

        <ApiContext.Provider
            value={{exercises, setExercises, filterExList, setFilterExList, name, setName, age, setAge, weight, setWeight, height, setHeight, programs, setPrograms, difficulty, setDifficulty, prevSessions, setPrevSessions, sets, setSets, push, setPush, routine, setRoutine, pull, setPull, core, setCore, legs, setLegs, cardio, setCardio, currentExerciseIndex, setCurrentExerciseIndex, rest, setRest, routineName, setRoutineName, pause, checkIn, setCheckIn, setPause, stats, setStats, dayPushCount, setDayPushCount, dayPullCount, setDayPullCount, dayCoreCount, setDayCoreCount, dayLegsCount, setDayLegsCount}}// pass all useState in here so outside components can use
        >
            {children}
        </ApiContext.Provider>
    )
}

export function useApi(){
    const context = useContext(ApiContext);

    if (!context) {
        throw new Error("useApi must be used within ApiProvider");
    }

    return context;
}