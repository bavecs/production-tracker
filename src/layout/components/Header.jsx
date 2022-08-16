import { clear } from '@testing-library/user-event/dist/clear';

import React, { useEffect } from 'react'

import { BsFillFileEarmarkPlusFill, BsFillFileRuledFill, BsPlayFill, BsList, BsTrashFill } from "react-icons/bs";

import { NavLink } from "react-router-dom";

const s = () => {
    localStorage.clear()

}

function Header({setSidebarState }) {

    return (
        <>
            <nav className="bg-white px-2 sm:px-4 border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <div className="container flex flex-wrap justify-between items-center mx-auto ">

                    <div className="flex">
                        <button type="button" onClick={() => setSidebarState(true)} className="inline-flex items-center p-3 text-lg text-gray-700 rounded-lg mr-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Menü</span>
                            <BsList className="text-m w-5" strokeWidth={0.7}/>
                        </button>

                    </div>

                    <div className="flex md:order-2">

                        <ul className="flex flex-wrap text-sm font-medium text-center pt-1 text-gray-500  dark:text-gray-400">


                            <li className="mr-2">
                                <NavLink to="/" className="inline-flex items-center p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
                                        <BsPlayFill className="my-1 w-4 h-4" />
                                        <span className="nav-title pl-2 font-bold hidden">Playground</span>
                                </NavLink>
                            </li>


                            <li className="mr-2">


                                <NavLink to="/sum" className="inline-flex items-center p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
                                        <BsFillFileEarmarkPlusFill className="my-1 w-4 h-4" />
                                        <span className="nav-title pl-2 font-bold hidden">Összesítő</span>
                                </NavLink>
                            </li>


                            <li className="mr-2">

                                <NavLink to="/table" className="inline-flex items-center p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
                                        <BsFillFileRuledFill className="my-1 w-4 h-4" />
                                        <span className="nav-title pl-2 font-bold hidden"> Darabszám követő</span>
                                </NavLink>
                            </li>


                        </ul>

                    </div>

                </div>
            </nav>

        </>
    )
}

export default Header