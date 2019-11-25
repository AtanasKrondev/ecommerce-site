import React, { Fragment } from 'react'
import styles from './styles.module.css'
import ProductCard from '../product-card'
import Header from '../header'
import logged from '../logged'
import data from '../data'

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
    isRed: false,
    ownerName: 'Placeholder'
  }

  handleClick = () => {
    this.setState({
      isRed: !this.state.isRed,
    })
  }

  // componentDidMount() {
  //   fetch('https://api.github.com/users/AtanasKrondev')
  //     .then((response) => response.json())
  //     .then((json) => {
  //       this.setState({
  //         ownerName: json.name
  //       })
  //       console.log(json)
  //     })
  //     .catch((myErr) => console.error(myErr))
  // }

  render() {
    console.log(this.props)
    const themeClass = this.state.isRed ? styles.redContainer : styles.container;
    return (
      <Fragment>
        <Header history={this.props.history} state={this.props.location.state} />
        <div>{this.state.ownerName}</div>
        <button onClick={this.handleClick}>Toggle Red Theme</button>
        <div className={themeClass}>
          {renderCards(data)}
        </div>
      </Fragment >
    )
  }
}

export default ProductList
