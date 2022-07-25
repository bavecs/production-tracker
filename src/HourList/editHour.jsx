import React, { useEffect, useState, useContext } from 'react'

import {BsPersonPlusFill, BsPeopleFill} from 'react-icons/bs'

import Operator from "./Operator"

import { ProductContext } from '../ContextProviders/productContext';

const mapGet = (array, hour) => {
    const map = new Map();
    array.forEach(item => map.set(item.key, item.value))
    return map.get(hour);
}

export default function EditHour({hour, setNormal, items}) {
    
    const [productsInHour, setProductsInHour] = useState([]);

    let { products } = useContext(ProductContext);

    const [normal, updateNormal] = useState(0);


    const [operatorList, setOperatorList] = useState([
        {
            id: 0,
            normalProductId: null,
            custom: null,
            isDefaultState: true
        }
    ]);

    /*
    TODO: create hook for uniqe id
     */
    useEffect(()=>{ 
        /*
        Set Products in hour
        */
       setProductsInHour([]);
        new Set(items.map(product => product.type.id))
            .forEach(id => {
                let product = products.find(product => product.id === id)
                setProductsInHour(productsInHour => [...productsInHour, product]
                        .sort((aProduct, bProduct) => aProduct.normal[0].value - bProduct.normal[0].value));


            })

        setNormal(normal)
    }, [items, normal])


    const getList = () =>  productsInHour.length ? productsInHour : products
    


    const handleSetNormal = (operatorNew) =>{

        setOperatorList(operatorList.map(operator => {
            return (operator.id === operatorNew.id) ? operatorNew : operator
        }))


        calcNormal()

    }


    const calcNormal = () => {
        let normal = 0;

        operatorList.forEach(operator => {
            if (operator.normalProductId !=  null) {
                let item = productsInHour.find(item => operator.normalProductId === item.id);
                normal = normal + mapGet(item.normal, 60)
            }
        });

        updateNormal(normal)
    }


    return (
        <div className="editPanel easy-in-out duration-300">
            
            {
                operatorList.map((operator, i) =>
                    <Operator key={i} operator={operator} setNormal={handleSetNormal} products={getList()} locationInList={i}/>)
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