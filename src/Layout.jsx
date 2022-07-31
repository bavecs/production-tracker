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


  return (
    <>
      <Header workingHourName={workingHours.name} />


       <div className="flex bg-slate-100/50 dark:bg-gray-800">

        {/* <Sidebar /> */}
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
