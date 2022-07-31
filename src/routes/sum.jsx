import { useEffect, useState, useMemo, useContext } from "react";
import useLocalStorage from "../useLocalStorage"


export default function Sum() {
    const [hoursData, setHoursData] = useLocalStorage('hours');

    const [items, setItems] = useState([]);

    const [allProducts, setAllProducts] = useState([])

    const [itemsMeasureCount, setItemsMeasureCount] = useState(0)
    const [itemCount, setItemCount] = useState(0)


    const updateProductList = () => {

        let allProductsArr = [], itemsArr = []


        hoursData.forEach(hour => allProductsArr.push(...hour.items));

        new Set(allProductsArr.map(product => product.type.id)).forEach(id => {

            itemsArr.push({
                ...allProductsArr.find(item => id === item.type.id),
                quantity: allProductsArr
                    .filter(item => id === item.type.id)
                    .reduce((prev, current) => prev + current.quantity, 0)
            })

        })


        setAllProducts(allProductsArr);
        setItems(itemsArr);

        setItemsMeasureCount(itemsArr.filter(item => item.type.measure).reduce((prev, current) => prev + current.quantity, 0))
        setItemCount(itemsArr.reduce((prev, current) => prev + current.quantity, 0))

        return true
    }


    useEffect(() => {
        updateProductList()
    }, [])


    return (
        <div>

            <h4 className="text-xl m-2 font-bold">Mérős</h4>



            <div className="overflow-x-auto relative  p-3 rounded-[0.8rem] border bg-white dark:bg-gray-900 dark:border-gray-700">
                <table className="w-full text-sm text-left">

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
                            <th scope="row" className="py-3 px-6 ">Összesesen</th>
                            <td className="py-3 px-6">{itemsMeasureCount}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <h4 className="text-xl m-2 font-bold mt-6">Nem mérős</h4>

            <div className="overflow-x-auto relative  p-3 rounded-[0.8rem] border bg-white dark:bg-gray-900 dark:border-gray-700 ">
                <table className="w-full text-sm text-left">

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
                            <th scope="row" className="py-3 px-6 ">Összesen</th>
                            <td className="py-3 px-6">{itemCount - itemsMeasureCount}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <h4 className="text-2xl m-2 font-bold mt-6">Összesen</h4>

            <div className="overflow-x-auto relative  p-3 rounded-[0.8rem] border bg-white dark:bg-gray-900 dark:border-gray-700 ">
                {itemCount}
            </div>


        </div>
    );
}