import React, { useEffect, useState } from 'react'
import { BsFillPersonFill } from "react-icons/bs";



export default function Operator({}) {



    return (
        <div className="flex p-3 operator justify-center gap-3">
            <div className="icon rounded-full bg-teal-400 white p-2.5 ">
                <BsFillPersonFill className="fill-white" />
            </div>
            <select
                id="selectableProductOptions"
                className="bg-gray-50 h-9 p-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60"
                >


                <option value="1">FRM</option>
                <option value="c">Egyedi</option>
               
            </select>


            

        </div>
    )
}