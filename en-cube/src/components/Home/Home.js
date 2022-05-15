import React from "react"
import { useNavigate } from "react-router-dom";

import "./Home.css"

import Button from "../Utilities/Button/Button"

import logo from "../../images/svgs/enLogo.svg"
import hyphen from "../../images/svgs/hyphen.svg"
import c from "../../images/svgs/c.svg"
import u from "../../images/svgs/u.svg"
import b from "../../images/svgs/b.svg"
import e from "../../images/svgs/e.svg"

const Home = () => {
    const navigate = useNavigate();
    return (
        <div class="home-container">
            {/* Title and Logo */}
            <div class="title">
            <img src={logo} id="en-cube-logo" alt="EN-Cube's logo" />
                <img src={hyphen} id="en-cube-hyphen" alt="EN-Cube's hyphen" />
                <img src={c} id="en-cube-title" alt="EN-Cube's title" />
                <img src={u} id="en-cube-title" alt="EN-Cube's title" />
                <img src={b} id="en-cube-title" alt="EN-Cube's title" />
                <img src={e} id="en-cube-title" alt="EN-Cube's title" />
            </div>

            {/* Buttons */}
            <div class="buttons">
                <div class="encrypt-button">
                    <Button value="Encrypt" fontsize="10vh" onClick={() => navigate("/encrypt")} />
                </div>
                <div class="decrypt-button">
                    <Button value="Decrypt" fontsize="10vh" onClick={() => navigate("/decrypt")} />
                </div>
            </div>
        </div>
    )
}

export default Home