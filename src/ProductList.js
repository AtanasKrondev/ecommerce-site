import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Product from './product/Product'
import ProductPrice from './product-price/ProductPrice'

import './product-list.css'

class ProductList extends Component {

  state = {
    counter: this.props.counter,
    title: 'Hello',
    value: ''
  }



  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    const { product } = this.props
    const { value } = this.state
    return (
      <div className="container" >
        <Product
          product={product}
          Price={ProductPrice}
        />
        <Product
          product={product}
          Price={ProductPrice}
        />
        <Product
          product={product}
          Price={ProductPrice}
        />

        <input onChange={this.handleChange} value={value} />
      </div>
    )
  }
}

ProductList.defaultProps = {
  counter: 0,
  product: {
    title: "Shoes Title",
    price: 69.69,
    brand: "Brand",
    image: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/232/athletic-shoe_1f45f.png"
  }
}

ProductList.propTypes = {
  counter: PropTypes.number,
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    brand: PropTypes.string,
    image: PropTypes.string,
  }).isRequired
}

export default ProductList
