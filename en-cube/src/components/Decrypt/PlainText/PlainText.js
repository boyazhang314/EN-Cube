import React from "react"

import "./PlainText.css"

const PlainText = ({state}) => {
    return (
        <div class="text-container">
            <div class="text-title">
                Decrypted Plain Text
            </div>
            <div class="text-body">
                <div class="text-text">
                    {state.cypherText}
                </div>
            </div>
            <div class="copy-button">
                <button value="Copy" class="copyBtn" onClick={
                    () => navigator.clipboard.writeText(state.plainText)
                }>Copy to Clipboard</button>
            </div>
        </div>
    )
}

export default PlainText