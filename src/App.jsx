
import { useState } from 'react'

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
import TicTacToe from './pages/TicTacToe'


/*
 Layout
*/
import Layout from './layout/DefaultLayout'

/*
 Services
*/
import { ProductProvider } from './utils/Providers/productContext';
import SetUserDetails from './setUserDetails';
import FetchUserDetails from './fetchUserDetail';



function App() {

  return (
    <ProductProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Playground />} />
                    <Route path="sum" element={<Summerize />} />
                    <Route path="table" element={<Normal />} />
                    <Route path="tt" element={<TicTacToe />} />
                    <Route path="userdetail" element={<SetUserDetails/>} />
                    <Route
                        path="user"
                        element={<FetchUserDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
