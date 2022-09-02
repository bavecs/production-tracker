import { useState, useEffect } from "react";


export const useHourLocalStorage = (storageKey, fallbackState) => {

  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
  );



  useEffect(() => {

    localStorage.setItem(storageKey, JSON.stringify(value));

    console.log('run')
    
  }, [value, storageKey]);

  return [value, setValue];
};

export default useHourLocalStorage