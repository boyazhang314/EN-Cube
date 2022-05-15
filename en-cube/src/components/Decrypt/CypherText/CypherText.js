import React from "react"

const CypherText = ({state, setState}) => {
    let handleChange = (e) => {
        setState({
            ...state,
            cypherText: e.target.value
        })
        console.log(e.target.value)
    }

    return (
        <div class="input-container">
            <div class="input-title">
                Input Cypher Text
            </div>
            <div class="input-text">
                <textarea class="plaintext-input" rows="15"
                    onBlur={handleChange}
                >{state.cypherText}</textarea>
            </div>
        </div>
    )
}

export default CypherText