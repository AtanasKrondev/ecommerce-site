import React, { Component } from 'react'
import Header from '../header'
import CheckoutForm from '../checkout-form'

class CheckoutPage extends Component {
    componentDidMount() {
        this.props.history.push({
            pathname: '/',
            state: {
                loggedIn: true,
                username: 'Pesho'
            }
        })
    }

    render() {
        return (
            <div>
                <Header />
                <CheckoutForm />
            </div >
        )
    }
}

export default CheckoutPage;