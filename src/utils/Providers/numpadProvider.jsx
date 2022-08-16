import { createContext, useContext, useState } from "react";


export const NumpadContext = createContext()

export const NumpadContextProvider = ({children}) => {



    const numpadIsActiveState = useState(false)
    const [builderMethod, setBuilderMethod] = useState()
    const numpadValue = useState({
        product_id: null,
        quantity: null
    });

       

    return <NumpadContext.Provider value={{
        numpadIsActiveState: numpadIsActiveState,
        numpadValue: numpadValue,
        builderMethod,
        setBuilderMethod
    }}>{children}</NumpadContext.Provider>
}

export const useNumpad = () => {
    return useContext(NumpadContext)
}