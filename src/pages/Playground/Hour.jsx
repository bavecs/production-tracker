import React, { useEffect, useReducer, useState, useRef } from 'react'

import EditHour from "./EditHour"

import { FaUserAlt } from "react-icons/fa";
import { BsFillCaretDownFill, BsPlusLg } from "react-icons/bs";

import Item from "./components/Item"


export default function Hour({ data, handleHourSelection, removeItem }) {


    const [hourData, setData] = useState({});

    const [isActive, setIsActive] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

    const [achived, setAchived] = useState(0);

    const [normal, setNormal] = useState(0);

    const [items, setItems] = useState([]);

    const [operators, setOperators] = useState(1);


    const editTogler = useRef();
    const hourWrapperRef = useRef();


    const [onEdit, toggleEdit] = useReducer((onEdit, action) => {

        return action ? action === "OPEN" : !onEdit

    }, false);


    const toggleSelection = (e) => {
        // console.log(editTogler.current)
        // .replaceWith(box.cloneNode(true));

        if (e.target.parentNode.id === "toggleEditParent" ||
            e.target === editTogler.current ||
            editTogler.current.contains(e.target)
        ) return

        if (onEdit) return

        handleHourSelection(hourData.hour)
    }

    const select = () => {
        if (isSelected || onEdit) return

        setIsSelected(true)
        handleHourSelection(hourData.hour)
    }


    useEffect(() => {
        setData(data);


        setItems(data.items);



        setAchived(items.reduce((prev, item) => prev + item.quantity, 0));

        if (!data.selected && isSelected) setIsSelected(false)
        if (!data.selected && onEdit) toggleEdit("CLOSE")

        // setNormal(() => {
        //     //  return 0
        //     if (!items.length) return 0

        //     let res = items.reduce((prev, item) =>
        //         (prev < mapGet(item.type.normal, 60)) ? prev : item)

        //     return res.type.normal.find((n) => n.key === hourData.minutes).value

        // });

    }, [data, items])

    const handleNormal = value => {
        setNormal(value);
    }

    const openNumpadHandler = () => {

    }



    return (
        <div className=" overflow-visible my-4">
            <div
                ref={hourWrapperRef}
                className={`hourWrapper bg-white   rounded-[0.8rem] border border-gray-100 overflow-hidden
                transition-transform ease-in-out         dark:bg-gray-900   dark:border-gray-700    
                ${hourData.selected ? 'selectedHour' : ''}
                ${onEdit ? 'onEditHour' : ''}
            `}
                onClick={select}
            >
                <div
                    className={`
                    hour
                    rounded-xl
                    bg-white dark:bg-gray-900 dark:text-white
            `
                    }
                >
                    <div className="flex justify-between px-2">
                        <div className="break">
                            {hourData.break &&
                                <span className="text-xs text-slate-700 dark:text-gray-400"><span role="img" aria-label="sheep">☕</span> {`${60 - hourData.minutes} p`}</span>
                            }
                        </div>
                        <div className="info flex" id="toggleEditParent">
                            <span className="flex text-xs m-[5px] mr-4 text-slate-600 dark:text-slate-400"><FaUserAlt className="mr-1 mt-[3px] text-[10px]" />{operators}</span>
                            <span
                                ref={editTogler}
                                onClick={() => hourData.selected ? toggleEdit() : false}
                                className="normal-values rounded-lg rounded-t-none px-2 py-0 "
                                id="hourEditorToggle">
                                <b className={`
                                            text-xs
                                            backdrop: ${(achived >= normal && achived != 0) ? 'positive' : (achived < normal) ? 'negative' : ''}`
                                }
                                >
                                    {achived}</b>  <b className="text-xs font-normal">/ {normal}</b>
                                <BsFillCaretDownFill className="inline-flex fill-white text-[12px] ml-1" />
                            </span>
                        </div>
                    </div>
                    <div className="productWrapper py-3 px-0 pt-1 flex overflow-hidden w-max" >
                        <div className="time box-content w-[3rem] text-center border-r border-r-gray-200 dark:border-r-gray-700 mr-2">
                            <h1 className='font-bold text-center text-xl w-full dark:text-gray-300'>{hourData.hour}</h1>
                        </div>
                        <div className="products flex flex-nowrap flex-1">
                            {data.items && data.items.map((item, i) => (
                                <Item key={i} item={item} remove={() => removeItem(item)} >
                                    <b className="text-teal-400 mr-1">{item.quantity}</b> 
                                    {item.type.name}
                                </Item>
                            ))}
                            { data.selected &&
                            <span onClick={openNumpadHandler}
                                className="p-1 rounded m-1  bg-blue-600 text-white  dark:border-blue-500 text-sm unselectable px-2">
                                <BsPlusLg className="inline-flex w-2 h-2 mb-1" strokeWidth={1.3}/>
                                {null}
                            </span>}
                        </div>

                    </div>
                </div>
                <EditHour items={items} postNormal={handleNormal} />
            </div>
        </div>
    )
}
