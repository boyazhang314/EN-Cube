import React from "react"

import "./CypherText.css"
import { encrypt } from "../../../cypher.js"

const CypherText = ({state}) => {
    return (
        <div class="cypher-container">
            <div class="cypher-title">
                Encrypted Cypher Text
            </div>
            <div class="cypher-body">
                <div class="cypher-text">
                    {encrypt(state.plainText, state.secretKey)}
                </div>
            </div>
            <div class="copy-button">
                <button value="Copy" class="copyBtn" onClick={
                    () => navigator.clipboard.writeText(encrypt(state.plainText, state.secretKey))
                }>Copy Cypher Text</button>
            </div>
            <div class="cypher-subtitle">
                Secret Key
            </div>
            <div class="cypher-subody">
                <div class="cypher-text">
                    {state.secretKey}
                </div>
            </div>
            <div class="copy-button">
                <button value="Copy" class="copyBtn" onClick={
                    () => navigator.clipboard.writeText(state.secretKey)
                }>Copy Secret Key</button>
            </div>
        </div>
    )
}

export default CypherText