import React from 'react'


export const Button = ({
    style = "default",
    children,
    onClick = null
}) => (
    <button type="button" onClick={onClick} className="inline-flex justify-center items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {children}
    </button>
)

export const ButtonPrimary = ({
    children,
    onClick = null
}) => (
    <button type="button" onClick={onClick} className="inline-flex justify-center items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {children}
    </button>
)

export const ButtonDefault = ({
    children,
    onClick = null
}) => (
    <button type="button" onClick={onClick} className="inline-flex justify-center items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {children}
    </button>
)

export const Select = ({
    id,
    label = null,
    children,
    onChange = null
}) =>
    <div>
        {label && <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{label}</label>}
        <select id={id} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {children}
        </select>
    </div>
