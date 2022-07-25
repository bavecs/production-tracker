import React, { useEffect, useReducer, useState, useRef } from 'react'

import EditHour from "./editHour"

import { FaUserAlt } from "react-icons/fa";
import { BsFillCaretDownFill } from "react-icons/bs";


let getHour = new Date().getHours();

export default function Hour({ data, handleHourSelection }) {


    const [hourData, setData] = useState({});

    const [isActive, setIsActive] = useState(false);

    const [achived, setAchived] = useState(0);

    const [normal, setNormal] = useState(0);

    const [items, setItems] = useState([]);

    const [operators, setOperators] = useState(1);


    const toggleEditButton = useRef()

    const [onEdit, toggleEdit] = useReducer((onEdit)=> {
        return !onEdit
    }, false);

    const toggleSelection = (e) => {
        // console.log(toggleEditButton.current)
        // .replaceWith(box.cloneNode(true));

       if (e.target.parentNode.id === "toggleEditParent" ||
       e.target === toggleEditButton.current ||
       toggleEditButton.current.contains(e.target)
       )  return 

       if (onEdit) return 
        
        handleHourSelection(hourData.hour)
    }

    const mapGet = (obj, hour) => {
        const map = new Map().set(obj.key, obj.value);
        return map.get(hour);
    }

    useEffect(() => {
        setData(data);

        setIsActive(data.hour === getHour);

        setItems(data.items);

        

        setAchived(items.reduce((prev, item) => prev + item.quantity, 0));

        // setNormal(() => {
        //     //  return 0
        //     if (!items.length) return 0

        //     let res = items.reduce((prev, item) =>
        //         (prev < mapGet(item.type.normal, 60)) ? prev : item)
                
        //     return res.type.normal.find((n) => n.key === hourData.minutes).value

        // });

    }, [data, getHour, items, normal])

    const handleSetNormal = newNormal => {
        setNormal(newNormal);
        console.log(normal);
    } 

    return (
        <div className="h-0 overflow-visible mb-[90px]">
            <div className={`hourWrapper bg-white   rounded-[0.8rem] border border-gray-100 overflow-hidden
                transition-transform ease-in-out         dark:bg-gray-900   dark:border-gray-700    
                ${isActive ? 'activeHour	' : ''}
                ${hourData.selected ? 'selectedHour' : ''}
                ${onEdit ? 'onEditHour' : ''}
            `}
            onClick={e => toggleSelection(e)}
            >
                <div
                    className={`
                    hour
                    rounded-xl
                    box-content
                    bg-white dark:bg-gray-900 dark:text-white
            `   
                    }
                    >
                        <div className="flex justify-between px-2">
                            <div className="break">
                                {hourData.break &&
                                    <span className="text-xs text-slate-700 "><span role="img" aria-label="sheep">☕</span> {`${60 - hourData.minutes} p`}</span>
                                }
                            </div>
                            <div className="info flex" id="toggleEditParent">
                                <span className="flex text-xs m-[5px] mr-4 text-slate-600"><FaUserAlt className="mr-1 mt-[3px] text-[10px]" />{operators}</span>
                                <span
                                    ref={toggleEditButton}
                                    onClick={() => hourData.selected ? toggleEdit() : false}
                                    className="normal-values rounded-lg rounded-t-none px-2 py-0 "
                                    id="hourEditorToggle">
                                    <b className={`
                                            text-xs
                                            backdrop: ${(achived >= normal && achived != 0) ? 'positive' : (achived < normal) ? 'negative' : ''}`
                                        }
                                        >
                                        {achived}</b>  <b className="text-xs font-normal">/ {normal}</b>
                                         <BsFillCaretDownFill className="inline-flex fill-white text-[12px] ml-1"/>
                                         </span>
                            </div>
                        </div>
                    <div className="p-3 pt-1 flex " >
                        <div className="time box-content w-[2rem] pr-1 border-r border-r-gray-200 mr-2">
                            <h1 className='font-bold text-center'>{hourData.hour}</h1>
                        </div>
                        <div className="products flex-none">
                            {items && items.map((item, i) => (
                                <span key={i}
                                    className="text-xs bg-green-400 text-white p-1 rounded m-1 inline-block"
                                ><b>{item.quantity}</b> {item.type.name}</span>
                            ))}
                        </div>
            
                    </div>
                </div>
                <EditHour items={items} setNormal={newNormal => handleSetNormal(newNormal)}/>
            </div>
        </div>
    )
}
