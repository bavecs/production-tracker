import React, { useEffect, useState, useContext } from 'react'

import {BsPersonPlusFill, BsPeopleFill} from 'react-icons/bs'

import Operator from "./Operator"

import { ProductContext } from '../ContextProviders/productContext';



export default function EditHour({hour, setNormal, items}) {
    
    const [productsInHour, setProductsInHour] = useState([]);

    let { products } = useContext(ProductContext);



    return (
        <div className="editPanel easy-in-out duration-300">
            
            {
                [0].map((operator, i) =>
                    <Operator key={i} />)
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