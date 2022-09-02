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

    const [operatorArray, setOperatorArray] = useState([operatorTemplate])

    let targetHour = (hourObj) => hourObj.hour === h_id;

    useEffect(() => {
        if(typeof h_id !== "number") return

        const hour = hoursCnt.find(targetHour)

        if(hour) {
            setItems(hour.items)
            setNormal(hour.goal)
            setAchived(hour.achived)
            setOperatorArray(hour.operators.length ? hour.operators : operatorArray)
        }

    }, [h_id])
 
    useEffect(()=>{

        if (hoursCnt)
            sethoursCnt(hoursCnt.map(hourObj =>
                targetHour(hourObj) ? {...hourObj,
                    items: items,
                    goal: normal,
                    achived: achived,
                    operators: operatorArray
                } : hourObj))

    }, [items, normal, achived])


    return {
        items,

        addItem: i => {
            setItems(items => [...items,  {...i, id: Math.floor(Math.random() * 1000) }])
        },

        removeItem: id => {
            setItems(items.filter(item => item.id !== id))
        },

        achived,

        setAchived,

        normal,

        setNormal,

        operatorArray,

        setOperatorArray
    }
    
}

export default useHour