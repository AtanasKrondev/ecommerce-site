import React, { Component, useState } from 'react'
import UsernameInput from './username-input'

const CheckoutForm = (props) => {
    const [username, setUsername] = useState(props.username || '');
    const [address, setAddress] = useState(props.address || '');
    const [city, setCity] = useState(props.city || '');
    const [iban, setIban] = useState(props.iban || '');
    const [gender, setGender] = useState(props.gender || '');
    const [terms, setTerms] = useState(false);
    const [error, setError] = useState(null);

    const handleFocusOut = (e) => {
        console.log('Focused Out')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, address, city, iban, gender, terms } = this.state;

        if (username === '') {
            setError('Username is mandatory')
        } else {
            setError(null)
        }

        this.props.history.push('/', {
            username, address, city, iban, gender, terms
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <UsernameInput username={username} changeUsername={e => setUsername(e.target.value)} />
            <div>
                <label htmlFor="address">Address: </label>
                <input type="text" id="address" onChange={e => setAddress(e.target.value)} value={address} onBlur={handleFocusOut} />
            </div>
            <div>
                <label htmlFor="city">City: </label>
                <select onChange={e => setCity(e.target.value)} value={city}>
                    <option value="">Choose...</option>
                    <option value="Sofia">Sofia</option>
                    <option value="Plovdiv">Plovdiv</option>
                    <option value="Varna">Varna</option>
                </select>
            </div>
            <div>
                <label htmlFor="iban">IBAN: </label>
                <input type="text" id="iban" onChange={e => setIban(e.target.value)} value={iban} />
            </div>
            <div>
                <div>
                    <label>Gender: </label>
                    Male <input type="radio" value="male" onChange={e => setGender(e.target.value)} />
                    Female <input type="radio" value="female" onChange={e => setGender(e.target.value)} />
                    Other <input type="radio" value="other" onChange={e => setGender(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="terms">Terms and Conditions: </label>
                    <input type="checkbox" onChange={e => setTerms(e.target.value)} value={terms} />
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

export default CheckoutForm;