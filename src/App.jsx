
import { useState } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HourList from "./HourList"


import Sum from './routes/sum'
import Table from './routes/table'

import Layout from './Layout'

import { ProductProvider } from './ContextProviders/productContext';

import SetUserDetails from './setUserDetails';
import FetchUserDetails from './fetchUserDetail';



function App() {

  return (
    <ProductProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HourList />} />
                    <Route path="sum" element={<Sum />} />
                    <Route path="table" element={<Table />} />
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
