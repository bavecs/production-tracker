import React, { useEffect, useState, useRef, useContext } from 'react'

import AddProduct from './AddProduct';
import products from '../data/products.json'


import Hour from './Hour'


import style from '../css/style.css'

import useHourLocalStorage from '../useHourLocalStorage'



import workingHoursJson from "../data/workingHours.json"

import ThemeContext from "../themeContext"
import FetchUserDetails from '../fetchUserDetail';

let getCurrentHour = new Date().getHours();


export default function HourList() {
    const [workingHours, setWorkingHours] = useState(workingHoursJson[0])
    const [selectedHour, setSelectedHour] = useState(null)

    

    const [hours, setHours] = useHourLocalStorage('hours', 
        workingHours.workingHours.map((hour) =>
        ({
            ...hour,
            selected: false,
            items: [],
            goal: 0,
            achived: 0
        }))
    )


    const handleHourSelection = (n) => {
        setHours(hours.map(obj =>
            ({ ...obj, selected: obj.hour === n && !obj.selected })
        ));
        

    }

    const handleNewItem = (newItem) => {

        return (!hours.some((a) => a.selected)) ?
            //Ha nincs kijelölt elem
            setHours(hours.map(obj =>
                obj.hour === getCurrentHour ?
                    { ...obj, items: [...obj.items, newItem] } :
                    obj
            ))
            :
            //Ha van kijelölt elem
            setHours(hours.map(obj =>
                obj.selected ?
                    { ...obj, items: [...obj.items, newItem] } :
                    obj
            ))

    }


    return (
        <div className=" mt-3 mb-[450px] ">
            <div className="mb-3">


                {hours.map((hourItem, i) => (<Hour key={i} data={hourItem} handleHourSelection={(n) => handleHourSelection(n)} />))}

            </div>


            <AddProduct products={products} onSubmit={(e) => handleNewItem(e)} />

        </div>
    );

}