import React, { useEffect, useState } from 'react'
import { BsFillPersonFill, BsXLg } from "react-icons/bs";



export default function Operator({operator, updateOperator, removeOperator, products}) {
    const [selected, setSelected] = useState(products[0].id)
    const [customValue, setCustomValue] = useState()
    const [customValueInput, setCustomValueInput] = useState(false)

    useEffect(()=> {
        if (operator.onDefaultValue)
            setSelected(products[0].id)
    }, [products]);

    useEffect(()=>{
        updateOperator({...operator, selectedProductId: selected})
    }, [selected])

    const handleSelection = e => {

        updateOperator({...operator, onDefaultValue: false})

        if(e === "c") {
            setCustomValueInput(true)
            //updateOperator({...operator, customValue: customValue, selected: null})

            //setSelected(null)
        } else {
            if (customValueInput) setCustomValueInput(false)

            
            setSelected(parseInt(e.target.value))
        }

        

    }


    return (
        <div className="flex p-3 operator justify-center gap-3">
            <div className="relative ">
                <BsFillPersonFill
                    className="fill-white icon rounded-full white p-1.5 w-8 h-8 shadow-md"
                    style={{backgroundColor: operator.color}}
                    />
                {
                    operator.id != 0 && 
                        <BsXLg
                            onClick={() => removeOperator(operator.id)}
                            className="block cursor-pointer fill-white bg-red-500 rounded-full p-1 w-4.5 h-4.5 shadow-lg absolute bottom-0 right-0 hover:bg-red-400 active:bg-red-600"/>

                }
            </div>
            <select
                id="selectableProductOptions"
                className="bg-gray-50 h-9 p-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60"
                value={selected}
                onChange={handleSelection}
                style={{fontStyle:  operator.onDefaultValue ? 'italic' : ''}}
                >

                {products.map((option, i) => (
                    <option
                        key={i}
                        style={{fontStyle: i != 0 && operator.onDefaultValue ? 'normal' : ''}}
                        value={option.id}>
                        {option.name}
                    </option>
                ))}


                <option value="c">Egyedi</option>
               
            </select>


            {
                customValueInput &&
                (<input
                    type="number"
                    onChange={(e) => {
                        let value = e.target.value;
                        setCustomValue(parseInt(value ? value : 0))
                        handleSelection("c");
                    }
                        
                    }
                    className="bg-gray-50 h-9 p-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22
                    " placeholder="Normál érték"/>)
                
            }
            

        </div>
    )
}