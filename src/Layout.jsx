import React, { useEffect, useState, useRef } from 'react'


import {
    Outlet
  } from "react-router-dom";

import Header from "./Header"

import workingHoursJson from "./data/workingHours.json"

import ThemeContext from './themeContext';

function App() {
  const [workingHours, setWorkingHours] = useState(workingHoursJson[0])


  return (
    <>
    <Header workingHourName={workingHours.name}/>

    <div className="container mx-auto px-6 max-w-md" >
    <ThemeContext.Provider value="dark">

      <Outlet />
    </ThemeContext.Provider>
    </div>

    </>
  );
}

export default App;
