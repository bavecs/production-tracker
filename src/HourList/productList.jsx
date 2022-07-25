import React from 'react'

function ProductList({ products }) {

    let productArray = products.map((prod, index) => ({
        id: index,
        ...prod
    }));

    return (
        productArray.map((prod) => (
            <div key={prod.id} className='productItem'>
                <h4>{prod.product.name}</h4>
                <p>{prod.q}</p>
            </div>
        ))
    )
}

export default ProductList