import { useState, createContext, useMemo } from 'react';


export const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState({
        name: "Username",
        emoji: "👨‍🚀",
        color: "#000000",
        id: 345234
    })

    const userMemo = useMemo(
        () => ({ user, setUser }), [user])


    return (
        <UserContext.Provider value={userMemo} >
            {children}
        </UserContext.Provider>
    );
}