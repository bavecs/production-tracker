import { createContext, useMemo } from "react";


import { useHourLocalStorage } from "../hooks/useHourLocalStorage";

export const SetupContext = createContext();

export const SetupProvider = ({ children }) => {
  const [hours, setHours] = useHourLocalStorage("hoursData");


  const value = useMemo(
    () => ({
        hours,
        setHours
    }),
    [hours]
  );
  return <SetupContext.Provider value={value}>{children}</SetupContext.Provider>;
};
