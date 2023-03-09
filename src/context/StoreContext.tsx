import { createContext, ReactNode, useContext, useState } from "react";

type storeProps = {
    info:Boolean,
    setInfo?:Function,
    dark:Boolean,
    setDark?:Function
}

type providerProps = {
    children:ReactNode
}

const StoreContext = createContext<storeProps>({info:false,dark:false});

export const StoreProvider = ({children}:providerProps) => {

    const [info,setInfo] = useState(false);
    const [dark,setDark] =useState(false);
    return <StoreContext.Provider value={{info,setInfo,dark,setDark}}>
        {children}
    </StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext);
