import React, { useEffect, useState, useRef } from 'react'


import {
  Outlet
} from "react-router-dom";

import Header from "./Header"
import Sidebar from "./Sidebar"

import workingHoursJson from "./data/workingHours.json"

import ThemeContext from './themeContext';

import { BsFillFileEarmarkPlusFill, BsFillFileRuledFill, BsPlayFill, BsList } from "react-icons/bs";


function App() {
  const [workingHours, setWorkingHours] = useState(workingHoursJson[0])
  const [sidebarState, setSidebarState] = useState(false)


  return (
    <>
      <Sidebar sidebarState={sidebarState} setSidebarState={setSidebarState} />
      <Header workingHourName={workingHours.name} setSidebarState={setSidebarState} />

       <div className="flex bg-slate-100/50 dark:bg-gray-800">

        
        <div className="container mx-auto my-3 px-6 max-w-md" >
          <ThemeContext.Provider value="dark">
            <Outlet />
          </ThemeContext.Provider>
        </div>
      </div>

    </>
  );
}

export default App;
