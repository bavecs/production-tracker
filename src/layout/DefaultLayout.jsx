import React, { useEffect, useState, useRef } from 'react'


import { Outlet } from "react-router-dom";

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"


import { BsFillFileEarmarkPlusFill, BsFillFileRuledFill, BsPlayFill, BsList } from "react-icons/bs";


export default () => {
  const [sidebarState, setSidebarState] = useState(false)


  return (
    <>
      <Sidebar sidebarState={sidebarState} setSidebarState={setSidebarState} />
      <Header setSidebarState={setSidebarState} />

       <div className="flex bg-slate-100/50 dark:bg-gray-800">

        
        <div className="container mx-auto my-3 px-6 max-w-md" >
            <Outlet />
        </div>
      </div>

    </>
  );
}

