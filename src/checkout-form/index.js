import React, { Component } from 'react'
import UsernameInput from './username-input'

class CheckoutForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: props.state.username,
            address: props.state.address,
            city: '',
            iban: '',
            gender: '',
            terms: false,
            error: null,
        }
    }

    changeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    changeAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }

    changeCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    changeIban = (e) => {
        this.setState({
            iban: e.target.value
        })
    }

    changeGender = (e) => {
        this.setState({
            gender: e.target.value
        })
    }

    changeTerms = (e) => {
        this.setState({
            terms: e.target.checked
        })
    }

    handleOnFocusOut = (e) => {
        console.log('Focused Out')
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, address, city, iban, gender, terms } = this.state;

        if (username === '') {
            this.setState({
                error: 'Username is mandatory'
            })
        } else {
            this.setState({
                error: null
            })

            // fetch({
            //     type: "POST",
            //     url: "api/save/checkout",
            //     body: { username, address, city, iban, gender, terms }
            // }).then((response) => response.json())
            //     .then(json => console.log(json))
            //     .catch(error => {
            //         this.setState({
            //             error
            //         })
            //     })

            console.log(this.state)

            this.props.history.push('/', {
                username, address, city, iban, gender, terms
            })
        }
    }

    render() {
        const { username, address, city, iban, error, terms } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <UsernameInput username={username} changeUsername={this.changeUsername} />
                <div>
                    <label htmlFor="address">Address: </label>
                    <input type="text" id="address" onChange={this.changeAddress} value={address} />
                </div>
                <div>
                    <label htmlFor="city">City: </label>
                    <select onChange={this.changeCity} value={city}>
                        <option value="">Choose...</option>
                        <option value="Sofia">Sofia</option>
                        <option value="Plovdiv">Plovdiv</option>
                        <option value="Varna">Varna</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="iban">IBAN: </label>
                    <input type="text" id="iban" onChange={this.changeIban} value={iban} />
                </div>
                <div>
                    <div>
                        <label>Gender: </label>
                        Male <input type="radio" value="male" onChange={this.changeGender} />
                        Female <input type="radio" value="female" onChange={this.changeGender} />
                        Other <input type="radio" value="other" onChange={this.changeGender} />
                    </div>
                    <div>
                        <label htmlFor="terms">Terms and Conditions: </label>
                        <input type="checkbox" onChange={this.changeTerms} value={terms} />
                    </div>
                </div>
                <button type="submit">Submit</button>
                {error ? (
                    <div>
                        <p>{error}</p>
                    </div>
                ) : null}
            </form >
        )
    }
}

export default CheckoutForm;