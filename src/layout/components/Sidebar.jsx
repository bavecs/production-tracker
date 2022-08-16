import React, { useContext, useEffect, useState } from 'react'

import { Button } from "../../components/UiElements"

import *  as Bs from 'react-icons/bs'

import { UserContext }  from '../../utils/Providers/userContext'

function Sidebar({ sidebarState, setSidebarState }) {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

    const {user} = useContext(UserContext)

    const sidebarData = [
        {
            id: 0,
            icon: Bs.BsTrashFill,
            name: "Új műszak",
            onClickFunction: () => {
                localStorage.clear()
                window.location.reload()
            }
        },
        {
            id: 1,
            icon: Bs.BsGearFill,
            name: "Beállítások",
            onClickFunction: () => {
                alert("Bocsi, ez még nincs lekódolva 😴")
            }
        }
    ]

    useEffect(() => {
        if (sidebarState && !sidebarIsOpen) openSidebar()
        else if (!sidebarState && sidebarIsOpen) closeSidebar()
    }, [sidebarState])

    const openSidebar = () => {
        setSidebarIsOpen(true)

        setSidebarState(true)
    }

    const closeSidebar = () => {
        setSidebarIsOpen(false)

        setSidebarState(false)
    }



    return (
        <div className={"sidebarWrapper".concat(sidebarIsOpen ? " sidebarOpen" : "")}>

            <div id="drawer-navigation" className="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 -translate-x-80 dark:bg-gray-800 transition-transform">

                


                    <div className="flex gap-5 flex-row items-center p-1 my-5">
                        <span className="block rounded-full shadow-md bg-black text-xl p-3">{user.emoji}</span>
                        <div>
                            
                            <h5 className="text-lg font-medium text-gray-900 dark:text-white">{user.name}</h5>
                            <a href="" className="text-slate-500 font-medium underline text-sm mr-1">Profilom</a> 
                        </div>
                    </div>


                <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menü</h5>

                <button onClick={closeSidebar} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <Bs.BsXLg className="w-3 h-3 m-1" />
                </button>

                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2">
                        {
                            sidebarData.map((element, i) => (
                                <li key={i}>
                                    <a href="#"
                                        onClick={element.onClickFunction}
                                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <element.icon className="w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                        <span className="ml-3">{element.name}</span>
                                    </a>
                                </li>
                            ))
                        }

                    </ul>
                    <div id="dropdown-cta" className="p-4 mt-6 bg-blue-50 rounded-lg dark:bg-blue-900" role="alert">
                        <div className="flex items-center mb-3">
                            <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>

                        </div>
                        <p className="mb-3 text-sm text-blue-900 dark:text-blue-400">
                            Az alkalmazás még Béta verzió, amely félkész funkciókat és hibákat tartalmaz. <br />☝ Az adataid vezesd analóg módon is a tesztelése alatt. 
                        </p>
                        <a className="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" href="mailto:balazs.vecsei@gmail.com">
                             balazs.vecsei@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            {
                sidebarIsOpen && (
                    <div
                        onClick={closeSidebar}
                        className="bg-black/20 fixed z-30 inset-0 inset-y-0 h-full w-full"></div>
                )
            }
        </div>

    )
}

export default Sidebar;