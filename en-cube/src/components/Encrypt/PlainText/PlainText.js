import React from "react"

import "./PlainText.css"

const PlainText = ({state, setState}) => {
    let handleChange = (e) => {
        setState({
            ...state,
            plainText: e.target.value
        })
        console.log(e.target.value)
    }

    return (
        <div class="input-container">
            <div class="input-title">
                Input Plain Text
            </div>
            <div class="input-text">
                <textarea class="plaintext-input" rows="15"
                    onBlur={handleChange}
                >{state.plainText}</textarea>
            </div>
        </div>
    )
}

export default PlainText