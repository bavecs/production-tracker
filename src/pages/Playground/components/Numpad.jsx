import React, { useState, useReducer } from 'react'
import numpad from "./css/numpad.css"

import { BsArrowReturnLeft, BsBackspace } from 'react-icons/bs'

export default function Numpad({ handleType, newItem, products }) {
    const [valueStr, setValueStr] = useState("0")

    const handleTypeNumber = e => {

        let val = e.target.value.toString()

        if (valueStr.length > 2) return 

        setValueStr((valueStr === "0") ? val : valueStr + val)


    }

    const handleBackspace = e => {
        e.preventDefault()

        let newVal = valueStr

        if (valueStr === "0") return 
        else if (valueStr.length < 2) newVal = "0"
        else {
            newVal = newVal.slice(0, -1)
        }
        setValueStr(newVal);
        
    }

    const handleEnter = () => {

    }

    return (
        <div id="numpad" >
            <div id="value" className="bg-gray-100/25   mb-2 rounded-lg flex p-2">
                <select
                    name="selectedProduct"
                    onChange={handleType}
                    value={newItem.type.id}
                    className="
                        items-center
                        p-2
                        h-8
                        mt-1
                        text-sm
                        font-medium
                        text-center
                        text-gray-900
                        bg-gray-200 
                        border-none
                        rounded-lg
                        hover:bg-gray-200
                        focus:ring-4
                        focus:outline-none
                        focus:ring-gray-300"
                >

                    {products.map((product, i) => (<option key={product.id} value={i} >{product.name}</option>))}

                </select>
                <div className="numpadInputWrapper w-full">
                    <span>{valueStr}</span>
                </div>
                <div className="backspaceWrapper" onClick={handleBackspace}>
                    <BsBackspace />
                </div>
            </div>
            <div id="numbers" className='gap-1'>
                <div className="OneToNine gap-1">
                    {
                        [...Array(9)].map((x, i) => {
                            x = ++i
                            return <button type="button" key={i} value={x} onClick={handleTypeNumber}>{x}</button>
                        })
                    }
                </div>
                <div className="zeroAndEnter gap-1">
                    <button type="button" value={0} onClick={handleTypeNumber} >0</button>
                    <button className="enter" type="button" value={"E"} >
                        <BsArrowReturnLeft className='inline-flex' strokeWidth={0.5} />
                    </button>
                </div>
            </div>
        </div>
    )
}