import {useState, useEffect, createContext, useContext} from 'react';

type Data = {
    id: number;
    type: string;
    image: string;
    name: string;
    part: string;
    execution:string[];
    muscles:string;
};

type ApiContextType = {
    exercises: Data[];
    setExercises: React.Dispatch<React.SetStateAction<Data[]>>;
    filterExList: string;
    setFilterExList: React.Dispatch<React.SetStateAction<string>>;
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
    //filter exersize for display page
   
    //nav filter for exersize list
    const [filterExList, setFilterExList] = useState("all");

    //set exercise stats
    return(

        <ApiContext.Provider
            value={{exercises, setExercises, filterExList, setFilterExList}}// pass all useState in here so outside components can use
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