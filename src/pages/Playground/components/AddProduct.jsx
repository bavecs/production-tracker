import React, { useEffect, useState } from 'react'
import numpad from "./numpad.css"

import { BsArrowReturnLeft, BsBackspace, BsChevronDown, BsPlusLg } from 'react-icons/bs'
import { useNumpad } from '../../../utils/Providers/numpadProvider';


function AddProduct({ products }) {

    const [newItem, setNewItem] = useState({ type: products[0], quantity: '' });

    const [valueStr, setValueStr] = useState("0")

    
    const [numpadIsOpen, toggleNumpadIsOpen] = useNumpad().numpadIsActiveState
    const [numpadValue, setNumpadValue] = useNumpad().numpadValue
    const builderMethod = useNumpad().builderMethod
    

    useEffect(() => {
        
        setNewItem({
            ...newItem,
            quantity: parseInt(valueStr)
        })
        setNumpadValue({...numpadValue, quantity: parseInt(valueStr)})
    }, [valueStr])


    function handleType(e) {
        setNewItem({
            ...newItem,
            type: products[e.target.value]
        });
        
    }


    const handleSubmit = e => {
        e.preventDefault();

        if (valueStr === "0") return
        
        builderMethod(newItem)

        setValueStr("0")
        setNewItem({ ...newItem, quantity: '' })
    }


    const handlePressNumber = e => {

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

    const toggleNumepad = () => {
        toggleNumpadIsOpen(!numpadIsOpen);
    }

    



    return (

            <div className={"numepedWrapper flex justify-center fixed right-0 left-0 bottom-0 pb-8 bg-gradient-to-t from-slate-100 dark:from-gray-900 translate-y-[40rem] transition-transform ".concat(numpadIsOpen ? " numepadOpen" : "")}>


                <form onSubmit={handleSubmit}
                    className=" addProduct rounded-xl p-4  w-full max-w-[300px]  mx-10  opacity-0  transition-opacity">


                    <div className="relative w-full">
                        <div id="numpad" className="">
                            <div id="value" className="bg-gray-300/20 dark:bg-gray-900/20  mb-2 rounded-lg flex p-2">
                                <select
                                    name="selectedProduct"
                                    onChange={handleType}
                                    value={newItem.type.id}
                                    className=" items-center p-2 h-8 mt-1 text-sm font-medium text-center text-gray-900 bg-gray-200  dark:text-gray-200 dark:bg-slate-700 border-none rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focusbg-gray-500 " >

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
                                            return <button type="button" key={i} value={x} onClick={handlePressNumber}>{x}</button>
                                        })
                                    }
                                </div>
                                <div className="zeroAndEnter gap-1">
                                    <button type="button" value={0} onClick={handlePressNumber} >0</button>
                                    <button className="enter" type="submit" value={"E"} >
                                        <BsArrowReturnLeft className='inline-flex' strokeWidth={0.5} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button type="button" onClick={toggleNumepad}
                            className=" text-white absolute bottom-0 left-0 h-11 w-[4rem] flex items-center justify-center p-3 m-1">
                            <BsChevronDown strokeWidth={.4}/> 
                        </button>
                    </div>
                </form>


            </div>

    )
}

export default AddProduct