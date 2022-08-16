
import { useContext, useEffect, useState } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

/*
 Pages
*/
import Playground from "./pages/Playground"
import Summerize from './pages/Summerize'
import Normal from './pages/Normal'
import Hall from './pages/Hall'
import TicTacToe from './pages/TicTacToe'


/*
 Layout
*/
import Layout from './layout/DefaultLayout'
/*
 Services
*/
import { UserContextProvider } from './utils/Providers/userContext';

import { HoursContextProvider } from './utils/Providers/hoursProvider'


function App() {

  const hasSetup = (localStorage.getItem("hours"))

  return (
    <UserContextProvider>
      <HoursContextProvider>
        <BrowserRouter>
          <Routes>
        
              {!hasSetup &&
                <Route index element={<Hall />} />
              }
              {hasSetup &&
              <Route path="/" element={<Layout />}>
                <Route index element={<Playground />} />
                <Route path="sum" element={<Summerize />} />
                <Route path="table" element={<Normal />} />
                <Route path="tt" element={<TicTacToe />} />
              </Route>
              }
        
          </Routes>
        </BrowserRouter>
      </HoursContextProvider>
    </UserContextProvider>
  );
}

export default App;
