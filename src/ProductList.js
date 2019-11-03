import React, { Component } from 'react'

import Product from './product/Product'
import ProductPrice from './product-price/ProductPrice'

import './product-list.css'

class ProductList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: props.counter
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      })
    }, 1000)
  }

  render() {
    const { product } = this.props
    const { counter } = this.state
    return (
      <div className="container" >
        <Product product={product} Price={ProductPrice}/>
        {counter}
      </div>
    )
  }
}

export default ProductList
