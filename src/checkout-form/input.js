import React from 'react'
const Input = () => {
    return (
        <div>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" onBlur={this.handleOnFocusOut} onChange={this.changeUsername} value={username} />
        </div>
    )
}

export default Input;