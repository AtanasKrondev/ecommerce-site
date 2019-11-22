import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

class Header extends Component {
  state = {
    searchValue: ""
  }

  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value
    })
  }

  render() {
    const { searchValue } = this.state
    return (
      <div className="header-container">
        <Link to="/" className="header-link">SoftUni React.js course</Link>
        <Link to="/checkout" className="header-link">Checkout</Link>
        <input value={searchValue} onChange={this.handleChange} placeholder="Search..." />
      </div>
    )
  }

}

export default Header