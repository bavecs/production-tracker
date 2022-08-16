import { createContext} from "react";
import { useHourLocalStorage } from "../hooks/useHourLocalStorage";

export const HoursContext = createContext([]);

export const HoursContextProvider = ({children}) => {

    const hoursState = useHourLocalStorage("hoursData");


    return <HoursContext.Provider value={hoursState}>{children}</HoursContext.Provider>
}