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
    }, [])
    //nav filter for exersise list
    const [filterExList, setFilterExList] = useState("all");
    //profile states for name age height and weight;
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [weight, setWeight] = useState<string>("");
    const [height, setHeight] = useState<string>("");
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
    }, [])
    //difficulty state management
    const [difficulty, setDifficulty] = useState("");
    return(

        <ApiContext.Provider
            value={{exercises, setExercises, filterExList, setFilterExList, name, setName, age, setAge, weight, setWeight, height, setHeight, programs, setPrograms, difficulty, setDifficulty}}// pass all useState in here so outside components can use
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