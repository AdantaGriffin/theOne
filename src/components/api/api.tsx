import {useState, useEffect, createContext, useContext} from 'react';

type Name = {
    name: string;
};
type Age = {
    age: string;
};
type Weight = {
    weight: string;
};
type Height = {
    height: string;
};

type ApiContextType = {
    age: Age;
    setAge: React.Dispatch<React.SetStateAction<Age>>;
    name: Name;
    setName: React.Dispatch<React.SetStateAction<Name>>;
    weight: Weight;
    setWeight: React.Dispatch<React.SetStateAction<Weight>>;
    height: Height;
    setHeight: React.Dispatch<React.SetStateAction<Height>>;
};

const ApiContext = createContext<ApiContextType | null>(null);

export function ApiProvider({ children }: { children: React.ReactNode }){
    
    //set ID data
   

    //set exercise stats
    return(

        <ApiContext.Provider
            value={null}// pass all useState in here so outside components can use
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