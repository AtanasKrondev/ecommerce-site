import React, { Component } from 'react'
import Header from '../header'
import CheckoutForm from '../checkout-form'
// import LibraryForm from '../checkout-form/library-form'
// import UncontrolledForm from '../checkout-form/uncontrolled-form'

class CheckoutPage extends Component {
    componentDidMount() {
        // this.props.history.push({
        //     pathname: '/',
        //     state: {
        //         loggedIn: true,
        //         username: 'Pesho'
        //     }
        // })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Header />
                <CheckoutForm state={this.props.location.state} history={this.props.history} />
            </div >
        )
    }
}

export default CheckoutPage;