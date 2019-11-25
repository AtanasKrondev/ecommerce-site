import React, { Component } from 'react'
import UsernameInput from './username-input'

class UncontrolledForm extends Component {
    constructor(props) {
        super(props)

        this.addressRef = React.createRef();
        this.cityRef = React.createRef();
        this.ibanRef = React.createRef();
        this.termsRef = React.createRef();
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.addressRef.current.value === '') {
            //
        } else {
            console.log(this.addressRef)
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* <UsernameInput username={username} changeUsername={this.changeUsername} /> */}
                <div>
                    <label htmlFor="address">Address: </label>
                    <input type="text" id="address" ref={this.addressRef} />
                </div>
                <div>
                    <label htmlFor="city">City: </label>
                    <select ref={this.cityRef}>
                        <option value="">Choose...</option>
                        <option value="Sofia">Sofia</option>
                        <option value="Plovdiv">Plovdiv</option>
                        <option value="Varna">Varna</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="iban">IBAN: </label>
                    <input type="text" id="iban" ref={this.ibanRef} />
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
                        <input type="checkbox" ref={this.termsRef} />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form >
        )
    }
}

export default UncontrolledForm;