import React, { useState } from 'react'
import { BsXLg } from 'react-icons/bs'

export const Item = ({children, item, remove}) => {

    const [isSelected, setIsSelected] = useState(false)

    return (
        <div className={
                "itemWrapper flex "
                .concat(isSelected ? " selected" : "")
                .concat(item.type.measure ? " measure" : "")
            }
            onClick={() => setIsSelected(!isSelected)}>

            <span className="product p-1 rounded m-1  text-teal-400 border border-teal-400 dark:border-teal-500 bg-[#e9fbf9] text-sm outline outline-2 outline-teal-300/0 unselectable flex z-10"> 
                {children}
            </span>
            <BsXLg className="ml-2 m-[.1rem] h-4 w-4 p-[.2rem] rounded-full bg-red-500 fill-white" onClick={remove}/>
        </div>
    )
};

export default Item