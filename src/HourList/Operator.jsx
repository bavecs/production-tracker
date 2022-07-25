import React, { useEffect, useState } from 'react'
import { BsFillPersonFill } from "react-icons/bs";



export default function Operator({operator, updateOperator, products}) {
    const [selected, setSelected] = useState(products[0].value);

    useEffect(()=>{
        //setNormal(selected);
        updateOperator({...operator, onDefaultValue: false, selectedProductId: selected})
    }, [selected])


    return (
        <div className="flex p-3 operator justify-center gap-3">
            <div className="icon rounded-full bg-teal-400 white p-2.5 ">
                <BsFillPersonFill className="fill-white" />
            </div>
            <select
                id="selectableProductOptions"
                className="bg-gray-50 h-9 p-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60"
                value={selected}
                onChange={(e) => setSelected(parseInt(e.target.value))}
                >

                {products.map((option, i) => (
                    <option key={i} value={option.id}>
                        {option.name}
                    </option>
                ))}


                <option value="c">Egyedi</option>
               
            </select>


            

        </div>
    )
}