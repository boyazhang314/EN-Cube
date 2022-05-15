import React from "react"

import "./PlainText.css"
import { decrypt } from "../../../cypher.js"

const PlainText = ({state}) => {
    return (
        <div class="text-container">
            <div class="text-title">
                Decrypted Plain Text
            </div>
            <div class="text-body">
                <div class="text-text">
                    {decrypt(state.cypherText, state.secretKey)}
                </div>
            </div>
            <div class="copy-button">
                <button value="Copy" class="copyBtn" onClick={
                    () => navigator.clipboard.writeText(decrypt(state.cypherText, state.secretKey))
                }>Copy to Clipboard</button>
            </div>
        </div>
    )
}

export default PlainText