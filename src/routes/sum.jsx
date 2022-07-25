import { useEffect, useState, useMemo } from "react";
import useLocalStorage from "../useLocalStorage"

export default function Sum() {
    const [hoursData, setHoursData] = useLocalStorage('hours');

    const [items, setItems] = useState([]);

    const [allProducts, setProducts] = useState([])

    const [itemsMeasureCount, setItemsMeasureCount] = useState(0)
    const [itemCount, setItemCount] = useState(0)

    useEffect(() =>{
        updateProductList()
    }, [hoursData])

    const updateProductList = () => {
        setProducts([]);
        setItems([])


        hoursData.forEach(hour => {
            hour.items.forEach(item => setProducts(allProducts => [...allProducts, item]) )
        });
        
        new Set(allProducts.map(product => product.type.id)).forEach(id => {

            setItems(items => [
                ...items,
                {
                    ...allProducts.find(item => id === item.type.id),

                    quantity: allProducts
                            .filter(item => id === item.type.id)
                            .reduce((prev, current) =>  prev + current.quantity, 0 )
                }
            ])

        })

        setItemsMeasureCount(items.filter(item => item.type.measure).reduce((prev, current) => prev + current.quantity, 0))
        setItemCount(items.reduce((prev, current) => prev + current.quantity, 0))

    }

    return (
        <>
            <button onClick={updateProductList} >Update</button>

            <h4 className="text-xl m-2 font-bold">Mérős</h4>
            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
                        <tr>
                            <th scope="col" className="py-3 px-6 rounded-l-lg">
                                Név
                            </th>
                            <th scope="col" className="py-3 px-6 rounded-r-lg">
                                Mennyiség
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.filter(item => item.type.measure).map((item) => (
                                <tr key={item.type.id} className="border-b">
                                    <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap ">
                                        {item.type.name}
                                    </th>
                                    <td className="py-4 px-6">
                                        {item.quantity}
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                    <tfoot>
                        <tr className="font-semibold text-gray-900 ">
                            <th scope="row" className="py-3 px-6 text-base">Összes mérős</th>
                            <td className="py-3 px-6">{itemsMeasureCount}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <h4 className="text-xl m-2 font-bold">Nem mérős</h4>
            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="py-3 px-6 rounded-l-lg">
                                Név
                            </th>
                            <th scope="col" className="py-3 px-6 rounded-r-lg">
                                Mennyiség
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            items.filter(item => !item.type.measure).map((item) => (
                                <tr key={item.type.id} className="border-b">
                                    <th scope="row" className="py-4 px-6 font-medium  whitespace-nowrap">
                                        {item.type.name}
                                    </th>
                                    <td className="py-4 px-6">
                                        {item.quantity}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr className="font-semibold text-gray-900 dark:text-white">
                            <th scope="row" className="py-3 px-6 text-base">Végösszeg</th>
                            <td className="py-3 px-6">{itemCount}</td>
                        </tr>
                    </tfoot>
                    <tfoot>
                        <tr className="font-semibold text-gray-900 dark:text-white">
                            <th scope="row" className="py-3 px-6 text-base">Összes nem m.:</th>
                            <td className="py-3 px-6">{itemCount - itemsMeasureCount}</td>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </>
    );
}