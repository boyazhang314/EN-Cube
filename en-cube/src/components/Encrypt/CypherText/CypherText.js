import React from "react"

import "./CypherText.css"

const CypherText = ({state}) => {
    return (
        <div class="cypher-container">
            <div class="cypher-title">
                Encrypted Cypher Text
            </div>
            <div class="cypher-body">
                <div class="cypher-text">
                    {state.plainText}
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

export default CypherText