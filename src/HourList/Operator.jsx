import React, { useEffect, useState } from 'react'
import { BsFillPersonFill } from "react-icons/bs";



export default function Operator({ operator, setNormal, products, locationInList }) {

    const [selected, select] = useState(0);
    const [customValue, setCustomValue] = useState("");

    const [goal, setGoal] = useState(0);

    const mapGet = (array, hour) => {
        const map = new Map();
        array.forEach(item => map.set(item.key, item.value))
        return map.get(hour);
    }

    const getDefaultNormal = () => {
            //  return 0
            if (!products.length) return 0

    
            let defaultProduct = products[locationInList];
            //return mapGet(defaultProduct.normal, 60);
                
    }

    useEffect(() => {
        setNormal({...operator, normalProductId: parseInt(selected), custom: selected === "c" ? customValue : null});

    }, [selected, customValue])



    return (
        <div className="flex p-3 operator justify-center gap-3">
            <div className="icon rounded-full bg-teal-400 white p-2.5 ">
                <BsFillPersonFill className="fill-white" />
            </div>
            <select
                id="selectableProductOptions"
                className="bg-gray-50 h-9 p-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60"
                style={{fontStyle: (operator.isDefaultState) ? 'italic' : 'none'}}
                onChange={(e) => select(e.target.value)}
                >

                {
                    products.map((product, i) => 
                        (<option
                            key={i}
                            value={product.id} >
                        {product.name} ({product.normal[0].value})
                        </option>)
                    )
                }
                <option value="c">Egyedi</option>
               
            </select>
            {
                selected === 'c' &&
                (<input
                    type="number"
                    onChange={(e) => {
                        let value = e.target.value;
                        setCustomValue(parseInt(value ? value : 0))}}
                    className="bg-gray-50 h-9 p-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22
                    " placeholder="Normál érték"/>)
                
            }

            

        </div>
    )
}