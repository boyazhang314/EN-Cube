import React from "react";

import "./Button.css"

const Button = ({value, onClick, fontsize}) => {
    return (
        <button 
            class="button"
            key={value}
            onClick={onClick}
            style={{
                "font-size": fontsize
            }}
        >{value}
        </button>
    )
}

export default Button