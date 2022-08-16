import React, { useEffect, useReducer, useState, useRef } from 'react'

import EditHour from "./EditHour"

import { FaUserAlt } from "react-icons/fa";
import { BsFillCaretDownFill, BsPlusLg } from "react-icons/bs";

import Item from "./components/Item"
import useItems from '../../utils/hooks/useItems';

import NormalButton from './components/normalButton';
import { useNumpad } from '../../utils/Providers/numpadProvider';


export default function Hour({ data, selected, onSelect }) {

    const [achived, setAchived] = useState(0);


    const [normal, setNormal] = useState(0);

    const [selectedItem,  setSelectedItem] = useState(null)

    const [operators, setOperators] = useState(1);

    const {items, addItem, removeItem} = useItems(data.hour)
    

    const [numpadIsActive, setNumpadIsActive] = useNumpad().numpadIsActiveState
    const [numpadValue, setNumpadValue] = useNumpad().numpadValue
    const setBuilderMethod = useNumpad().setBuilderMethod
    

    const [onEdit, toggleEdit] = useReducer((onEdit, action) => {

        return action ? action === "OPEN" : !onEdit

    }, false);


    const select = () => {
        if(!selected) {
            onSelect(data.hour)
        }
    }


    useEffect(() => {
        if (!selected && onEdit) toggleEdit("CLOSE")

        setAchived(items ? items.reduce((prev, item) => prev + item.quantity, 0) : 0);

    }, [data, items, selected])

    const handleNormal = value => {
        setNormal(value);
    }

    const openNumpadHandler = () => {
        setNumpadIsActive(true)
        setBuilderMethod(() => addItem)
    }

    const hourWrapperClasses = `hourWrapper bg-white rounded-[0.8rem] border border-gray-100 overflow-hidden transition-transform ease-in-out dark:bg-gray-900 dark:border-gray-700 ${selected ? 'selectedHour ' : ''} ${onEdit ? 'onEditHour' : ' '}`



    return (
        <div className=" overflow-visible my-4">
            <div className={hourWrapperClasses} onClick={select} >
                <div className={`hour rounded-xl bg-white dark:bg-gray-900 dark:text-white ` } >
                    <div className="flex justify-between px-2">
                        <div className="break">
                            {data.break &&
                                <span className="text-xs text-slate-700 dark:text-gray-400">
                                    <span role="img" aria-label="coffe">☕</span>
                                    {`${60 - data.minutes} p`}
                                </span>
                            }
                        </div>
                        <div className="info flex" id="toggleEditParent">
                            <span className="flex text-xs m-[5px] mr-4 text-slate-600 dark:text-slate-400">
                                <FaUserAlt className="mr-1 mt-[3px] text-[10px]" />
                                {operators}
                            </span>
                            <NormalButton onClick={() => selected ? toggleEdit() : false} achived={achived} normal={normal} />
                        </div>
                    </div>
                    <div className="productWrapper py-3 px-0 pt-1 flex overflow-hidden w-max" >
                        <div className="time box-content w-[3rem] text-center border-r border-r-gray-200 dark:border-r-gray-700 mr-2">
                            <h1 className='font-bold text-center text-xl w-full dark:text-gray-300'>{data.hour}</h1>
                        </div>

                        <div className="products flex flex-nowrap flex-1">

                            {items && items.map((item, i) => 
                                <Item key={i}
                                    measure={item.type.measure}
                                    selectState={[selectedItem === i, param => setSelectedItem(param ?? i)]}
                                    remove={() => removeItem(item.id)} >
                                        <b className="text-teal-400 mr-1">
                                            {item.quantity}
                                        </b> 
                                        {item.type.name}
                                </Item>
                            )}

                            { selected &&
                                <span onClick={openNumpadHandler}
                                    className="p-1 rounded m-1  bg-blue-600 text-white  dark:border-blue-500 text-sm unselectable px-2 z-10">
                                    <BsPlusLg className="inline-flex w-2 h-2 mb-1" strokeWidth={1.3}/>
                                    {numpadValue.quantity > 0 ? numpadValue.quantity : null}
                                </span>
                            }

                        </div>

                    </div>
                </div>
                <EditHour items={items} hourMinutes={data.minutes} postNormal={handleNormal} />
            </div>
        </div>
    )
}
