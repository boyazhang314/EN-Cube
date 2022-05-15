import React from "react"

import "./SecretKey.css"

const Generate = ({state, setState}) => {
    let handleChange = (e) => {
        setState({
            ...state,
            secretKey: e.target.value
        })
        console.log(e.target.value)
    }

    return (
        <div class="secret-key-container">
            <div class="secretkey-title">
                Enter Secret Key
            </div>
            <div class="secretkey-text">
                <textarea class="secretkey-input" rows="1"
                    onBlur={handleChange}
                >{state.secretKey}</textarea>
            </div>
        </div>
    )
}

export default Generate