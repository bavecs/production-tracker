import React, { useEffect, useState, useRef } from 'react'


import {
  Outlet
} from "react-router-dom";

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

import workingHoursJson from "../stores/workingHours.json"

import ThemeContext from '../utils/Providers/themeContext';

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
