import React, { useEffect, useState, useContext } from 'react'

import { BsPersonPlusFill, BsPeopleFill } from 'react-icons/bs'

import Operator from "./Operator"

import useProducts from '../../utils/hooks/useProducts';

const mapGet = (array, hour) => {
    const map = new Map();
    array.forEach(item => map.set(item.key, item.value))
    return map.get(hour);
}

const settings = {
    maxOperatorQuantity: 3
}


export default function EditHour({hourHook, hourMinutes }) {

    const [productsInHour, setProductsInHour] = useState([]);

    let [products]  = useProducts()

    const {
        items,
        setNormal,
        operatorArray,
        setOperatorArray} = hourHook


    useEffect(() => {

        /*
        * Hourly products load in, and sort
        */

        let productsInHour = [];

        if (items) {
            new Set(items.map(product => product.type.id)).forEach(id => {

                let product = products.find(product => product.id === id)

                productsInHour = [...productsInHour, product]
                    .sort((a, b) => a.normal[0].value - b.normal[0].value)

            })
        }

        productsInHour = [...productsInHour, ...products.filter(prod => !productsInHour.includes(prod))]

        setProductsInHour(productsInHour);

        updateNormal();


    }, [items, operatorArray]);


    /*
    * Find the client operator in Operator Array and replace
    */
    const updateOperator = targetOperator => {
        setOperatorArray(operatorArray.map(operator =>
            (operator.id === targetOperator.id) ? targetOperator : operator
        ))
    }

    const updateNormal = () => {

        let normal = 0;

        if(items.length)
        operatorArray.forEach(operator => {
            if (typeof operator.selectedProductId === "number" && operator.customValue === null) {
                let item = products.find(item => operator.selectedProductId === item.id);
                normal = normal + mapGet(item.normal, hourMinutes)
            }
            if (operator.customValue) { 
                console.log(operator.customValue);

            }
        });

        setNormal(normal);

    }

    const addOperator = () => {
        if (operatorArray.length < settings.maxOperatorQuantity) 
            setOperatorArray([...operatorArray, {
                id: operatorArray.length,
                onDefaultValue: true,
                selectedProductId: null,
                customValue: null,
                color: "#" + Math.floor(Math.random()*16777215).toString(16)
            }])
    }

    const removeOperator = targetId => {
        setOperatorArray(operatorArray.filter(operator => operator.id != targetId))
    }


    return (
        <div className="editPanel easy-in-out duration-300">

            {
                operatorArray.map(operator =>
                    <Operator
                        key={operator.id}
                        operator={operator}
                        updateOperator={updateOperator}
                        removeOperator={removeOperator}
                        products={productsInHour} />)
                }

            <div className="flex p-3 place-content-around gap-3">

                    {
                        operatorArray.length < settings.maxOperatorQuantity &&
                        <button
                            type="button"
                            onClick={addOperator}
                            className="py-2 flex px-4 mr-2 mb-2 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">
                            <BsPersonPlusFill className="mr-2 -ml-1 w-4 h-4" />
                            Új operátor
                        </button>
                    }
                    


            </div>


        </div>
    )
}