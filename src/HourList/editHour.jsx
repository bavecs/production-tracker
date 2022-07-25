import React, { useEffect, useState, useContext } from 'react'

import { BsPersonPlusFill, BsPeopleFill } from 'react-icons/bs'

import Operator from "./Operator"

import { ProductContext } from '../ContextProviders/productContext';

const mapGet = (array, hour) => {
    const map = new Map();
    array.forEach(item => map.set(item.key, item.value))
    return map.get(hour);
}


export default function EditHour({ hour, postNormal, items }) {

    const [productsInHour, setProductsInHour] = useState([]);

    const [normal, setNormal] = useState(0);

    let { products } = useContext(ProductContext);

    const [operatorArray, setOperatorArray] = useState([
        {
            id: 0,
            onDefaultValue: true,
            selectedProductId: null,
            customValue: null
        },
        {
            id: 1,
            onDefaultValue: true,
            selectedProductId: null,
            customValue: null
        }
    ])

    useEffect(()=>{
        
        /*
        * Hourly products load in, and sort
        */
        setProductsInHour([]);
        new Set(items.map(product => product.type.id)).forEach(id => {

            let product = products.find(product => product.id === id)

            setProductsInHour(productsInHour => [...productsInHour, product]
                    .sort((aProduct, bProduct) => aProduct.normal[0].value - bProduct.normal[0].value));

        })

    }, [normal, items, operatorArray]);

    useEffect(()=> {

        updateNormal();
        postNormal(normal);
        console.log(normal);

    }, [operatorArray])

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

        operatorArray.forEach(operator => {
            if (operator.normalProductId !=  null) {
                let item = productsInHour.find(item => operator.normalProductId === item.id);
                normal = normal + mapGet(item.normal, 60)
                console.log(normal)
            }
        });


    }

    const getList = productsInHour.length ? productsInHour : products;


    return (
        <div className="editPanel easy-in-out duration-300">

            {
                operatorArray.map(operator =>
                    <Operator key={operator.id} operator={operator} updateOperator={updateOperator} products={getList}/>)
            }

            <div className="flex p-3  justify-center gap-3">
                <button type="button" className="py-2 flex px-4 mr-2 mb-2 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">
                    <BsPersonPlusFill className="mr-2 -ml-1 w-4 h-4" />
                    Új op.
                </button>
                <button type="button" className="py-2 flex px-4 mr-2 mb-2 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">
                    <BsPeopleFill className="mr-2 -ml-1 w-4 h-4" />
                    Közös
                </button>
            </div>


        </div>
    )
}