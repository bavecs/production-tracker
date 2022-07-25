import { useState, createContext, useMemo } from 'react';
import productsJson from "../data/products.json";


const ProductContext = createContext();



const ProductProvider = (props) => {
    const [products, setProducts] = useState(productsJson);
    // the state that we'll be storing the products into

    /* because we will be providing an object to the provider, it is better to put the value inside a useMemo so that the component will only re-render when there's a change in the value. */

    const value = useMemo(
        () => ({ products, setProducts }), [products])


    return (
        <ProductContext.Provider
            value={value}
        >
            {props.children}
        </ProductContext.Provider>
    );
}
export { ProductContext, ProductProvider };