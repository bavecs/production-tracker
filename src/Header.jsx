import { clear } from '@testing-library/user-event/dist/clear';
import React, { useEffect } from 'react'
import { BsFillFileEarmarkPlusFill, BsFillFileRuledFill, BsPlayFill, BsList, BsTrashFill } from "react-icons/bs";

import { Link } from "react-router-dom";

const s = () => {
    localStorage.clear()

}

function Header({ workingHourName }) {

    return (
        <>
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                
                <div className="flex">
                    <button type="button" className="inline-flex items-center p-3 text-lg text-gray-700 rounded-lg mr-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                                <span className="sr-only">Menü</span>
                                <BsList className="text-m" />
                            </button>
                    <button 
                    onClick={s}
                    type="button" className="inline-flex items-center p-3 text-lg text-gray-700 rounded-lg mr-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                                <span className="sr-only">Ürít</span>
                                <BsTrashFill className="text-m" />
                            </button>
                    <a className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MS6-LF</span>
                    </a>
                </div>

                <div className="flex md:order-2">
                    <Link to="/">
                        <button type="button" className="inline-flex items-center p-3 text-lg text-gray-700 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Folyamat</span>
                            <BsPlayFill className="text-m" />
                        </button>
                    </Link>
                    <Link to="/sum">
                        <button type="button" className="inline-flex items-center p-3 text-lg text-gray-700 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Darabszámkövető</span>
                            <BsFillFileEarmarkPlusFill className="text-m" />
                        </button>
                    </Link>

                    <Link to="/table">
                    <button type="button" className="inline-flex items-center p-3 text-lg text-gray-700 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                        <span className="sr-only">Könyvelés</span>
                        <BsFillFileRuledFill className="text-m" />
                    </button>
                    </Link>
                </div>

            </div>
        </nav>

        </>
    )
}

export default Header