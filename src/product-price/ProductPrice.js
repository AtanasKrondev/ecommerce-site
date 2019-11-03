import React from 'react'

const ProductPrice = ({ children }) => {
    return (
        <p className="product-price">
            Price:  {children}
        </p>
    )
}

export default ProductPrice
