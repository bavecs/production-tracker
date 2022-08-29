import { useEffect, useState, useContext } from "react"

import { HoursContext } from '../Providers/hoursProvider'

const operatorTemplate = {
    id: 0,
    onDefaultValue: true,
    selectedProductId: null,
    customValue: null,
    color: "rgb(132 204 22)"
}


export const useHour = (h_id, fallback) => {

    const [hoursCnt, sethoursCnt] = useContext(HoursContext) ?? []

    const [items, setItems] = useState([])

    const [normal, setNormal] = useState(0)

    const [achived, setAchived] = useState(0)

    const operatorState = useState([operatorTemplate])

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
        },

        hourAchived: 0,

        setHourAchived: n => {
            sethoursCnt(hoursCnt.map(hourObj => {
                return h_id === hourObj.hour ? {...hourObj, achived: n} : hourObj
            }))
        },

        hourNormal: normal,

        setHourNormal: n => setNormal(n),

        hourOperatorArray: [],

        setHourArray: n => []
    }
    
}

export default useHour