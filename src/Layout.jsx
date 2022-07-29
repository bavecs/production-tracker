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



       <div className="flex">{/*
        <div className="flex fixed z-20 top-5 left-5">
          <button type="button" className="inline-flex items-center p-3 text-lg text-gray-700 rounded-lg mr-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
            <span className="sr-only">Menü</span>
            <BsList className="text-m" />
          </button>
          <a className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MS6-LF</span>
          </a>
        </div> */}

        {/* <Sidebar /> */}
        <div className="container mx-auto px-6 max-w-md" >
          <ThemeContext.Provider value="dark">
            <Outlet />
          </ThemeContext.Provider>
        </div>
      </div>

    </>
  );
}

export default App;
