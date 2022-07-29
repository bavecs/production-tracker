import React, { useState } from 'react'

function AddProduct({ products, onSubmit }) {

    const [newItem, setNewItem] = useState({ type: products[0], quantity: ''});

    function handleType(e) {
        setNewItem({
            ...newItem,
            type: products[e.target.value]
        });
    }

    function handleQuantity(e) {
        setNewItem({
            ...newItem,
            quantity: parseInt(e.target.value)
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit(newItem);

        setNewItem({ ...newItem, quantity: '' });
    }




    return (
        
        <div className="
            flex
            justify-center
            fixed
            right-0
            left-0
            bottom-[calc(5vh_-_1rem)]
            ">

            <form onSubmit={handleSubmit}
                className="
                    addProduct
                    rounded-xl p-4
                    bg-blue-800
                    shadow-lg

                    ">

                <div className="flex align-middle">

                    <select
                        name="selectedProduct"
                        onChange={handleType}
                        value={newItem.type.id}
                        className="
                                flex-shrink-0
                                z-10
                                inline-flex
                                items-center
                                py-2.5
                                px-4
                                text-sm
                                font-medium
                                text-center
                                text-gray-900
                                bg-gray-100 border
                                border-gray-300
                                rounded-l-lg
                                hover:bg-gray-200
                                focus:ring-4
                                focus:outline-none
                                focus:ring-gray-300"
                    >

                        {products.map((product, i) => (<option key={product.id} value={i} >{product.name}</option>))}

                    </select>

                    <div className="relative w-full">
                        <input
                            onChange={handleQuantity}
                            type="number"
                            className="
                                block
                                p-2.5
                                w-full
                                z-20
                                text-sm
                                text-gray-900
                                bg-gray-50
                                rounded-r-lg
                                border-l-gray-100
                                border-l-2 border
                                border-gray-300
                                focus:ring-blue-500
                                focus:border-blue-500"
                            placeholder="Mennyiség"
                            required
                            value={newItem.quantity}
                        />

                        <button
                            type='submit'
                            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                        >
                            Hozzáadás
                        </button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default AddProduct