import { useEffect, useState, useContext } from "react"

import { HoursContext } from '../../utils/Providers/hoursProvider'


export const useItems = (h_id, fallback) => {

    const [hoursCnt, sethoursCnt] = useContext(HoursContext) ?? []

    const [items, setItems] = useState([])

    let targetHour = (hourObj) => hourObj.hour === h_id;

    useEffect(() => {
        if(typeof h_id !== "number") return

        const hour = hoursCnt.find(targetHour)        
        setItems(hour ? hour.items : [])

    }, [h_id])

    useEffect(()=>{

        if (hoursCnt)
            sethoursCnt(hoursCnt.map(hourObj =>
                targetHour(hourObj) ? {...hourObj, items: items} : hourObj))

    }, [items])


    return {
        items,

        addItem: i => {
            setItems(items => [...items,  {...i, id: Math.floor(Math.random() * 1000) }])
        },

        removeItem: id => {
            setItems(items.filter(item => item.id !== id))
        }
    }
    
}

export default useItems