import React from 'react'

function ProductCard() {
    return (
        <div>
            <h3>Product 1</h3>
            <div>
                <span>Price: 1$</span>
                <p>Test Product</p>
                {new Date().toLocaleTimeString()}
            </div>
        </div>
    )
}

setInterval(ProductCard, 1000)

export default ProductCard