import { useEffect, useState } from "react"
import productsJson from "../../stores/products.json"

const useProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(()=> {
        setProducts(productsJson);
    }, [products])

    return [products]
}

export default useProducts