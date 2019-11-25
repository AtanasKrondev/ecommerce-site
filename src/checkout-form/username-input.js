import React from 'react'
const UsernameInput = ({ changeUsername, username }) => {
    return (
        <div>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" onChange={changeUsername} value={username} />
        </div>
    )
}

export default UsernameInput;