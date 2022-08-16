import React, { useState, useContext, useEffect } from 'react'

import AddProduct from './components/AddProduct';
import products from '../../stores/products.json'


import Hour from './Hour'
import HourList from './HourList'

import style from './style.css'

import { HoursContext } from '../../utils/Providers/hoursProvider'
import { NumpadContextProvider } from '../../utils/Providers/numpadProvider';


export default function Playground() {

    const selectedHour = useState(null)

    const [hours, setHours] = useContext(HoursContext)

    const [numpadActive, setNumpadActive] = useState(false)


    return (
        <div className=" mt-3 mb-[450px] ">

            <NumpadContextProvider>

                <div className="mb-3">
                        <HourList hours={hours} hourComponent={Hour} selectedHourState={selectedHour} />
                </div>

                <AddProduct products={products}  />

            </NumpadContextProvider>

        </div>
    );

}