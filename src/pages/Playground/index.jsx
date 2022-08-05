import React, { useEffect, useState, useRef, useContext } from 'react'

import AddProduct from './components/AddProduct';
import products from '../../stores/products.json'


import Hour from './Hour'


import style from './style.css'

import useHourLocalStorage from '../../hooks/useHourLocalStorage'

import workingHoursJson from "../../stores/workingHours.json"


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

        let hasSelected = false

        setHours(hours.map(obj =>{

            let selected = obj.hour === n && !obj.selected

            if(selected) hasSelected = obj.hour
            
            return { ...obj, selected: selected }
        }));

        setSelectedHour(hasSelected)
        

    }

    const Item = (() => {
        return {
    
            add: newItem => setHours(
                hours.map(obj => obj.selected ? { ...obj, items: [...obj.items, newItem] } : obj )
            ),
    
            remove: (hour, item) => setHours(
                hours.map(h => h.hour === hour ? { ...h, items: h.items.filter(i => i != item)} : h )
            )
    
        }
    })();




    return (
        <div className=" mt-3 mb-[450px] ">
            <div className="mb-3">


                {hours.map((hourItem, i) => (
                    <Hour key={i}
                        data={hourItem}
                        handleHourSelection={(n) => handleHourSelection(n)}
                        removeItem={(el) => Item.remove(hourItem.hour, el)} />
                    ))
                }

            </div>


            <AddProduct products={products} hasSelected={selectedHour} onSubmit={(e) => Item.add(e)} />

        </div>
    );

}