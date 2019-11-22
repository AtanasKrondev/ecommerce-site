import React, { Component } from 'react'
import { directive } from '@babel/types'

class CheckoutForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            address: '',
            city: '',
            iban: '',
            gender: '',
            terms: false,
        }
    }

    render() {
        return (
            <form>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" />
                </div>
                <div>
                    <label htmlFor="address">Address: </label>
                    <input type="text" id="address" />
                </div>
                <div>
                    <label htmlFor="city">City: </label>
                    <select>
                        <option value="Sofia">Sofia</option>
                        <option value="Plovdiv">Plovdiv</option>
                        <option value="Varna">Varna</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="iban">IBAN: </label>
                    <input type="text" id="iban" />
                </div>
                <div>
                    <label htmlFor="terms">Terms and Conditions</label>
                    <input type="checkbox" />
                </div>
                <div>
                    <label>Gender: </label>
                    Male <input type="radio" value="male" />
                    Female <input type="radio" value="female" />
                    Other <input type="radio" value="other" />
                    <label htmlFor="terms">Terms and Conditions</label>
                    <input type="checkbox" />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default CheckoutForm;