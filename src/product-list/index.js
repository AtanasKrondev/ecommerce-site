import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import ProductCard from '../product-card'
import Header from '../header'
import logged from '../logged'
// import styles from './styles.module.css'

const Wrapper = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
  padding-top: 40px;

  ${props => props.red && css`
    background: red;
  `}
`

const renderCards = (products) => {
  return products.map((product) => {
    return (
      <Fragment key={product.id}>
        {logged(ProductCard, product)}
      </Fragment>
    )
  })
}

class ProductList extends React.Component {
  state = {
    isRed: false
  }

  handleClick = () => {
    this.setState({
      isRed: !this.state.isRed
    })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <button onClick={this.handleClick}>Toggle Red Theme</button>
        <Wrapper red={this.state.isRed}>
          {renderCards(this.props.products)}
        </Wrapper>
      </Fragment >
    )
  }
}

ProductList.defaultProps = {
  products: []
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
}

export default ProductList
