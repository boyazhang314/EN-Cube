import React, { useEffect, useState } from "react"
import { ProgressBar, Step } from "react-step-progress-bar";
import { useNavigate } from "react-router-dom";
import "react-step-progress-bar/styles.css";

import "./Decrypt.css"

import Button from "../Utilities/Button/Button";
import CypherText from "./CypherText/CypherText"
import SecretKey from "./SecretKey/SecretKey"
import PlainText from "./PlainText/PlainText"

const Decrypt = () => {
    const [state, setState] = useState({
        cypherText: "",
        secretKey: "",
        shortText: false
    })
    
    // multistep form
    const [multiStep, setMultiStep] = useState({percent: 25})

    const stepForward = () => {
        if (multiStep.percent < 75) {
            if (state.cypherText.length >= 3) {
                setMultiStep({ ...multiStep, percent: multiStep.percent + 50 })
                setState({
                    ...state,
                    shortText: false
                })
            } else {
                setMultiStep({ ...multiStep, percent: multiStep.percent })
                setState({
                    ...state,
                    shortText: true
                })
            }
        } else if (multiStep.percent < 100) {
            setMultiStep({ ...multiStep, percent: multiStep.percent + 25 })
        }
    }

    const stepBack = () => {
        if (multiStep.percent === 100) {
            setMultiStep({ ...multiStep, percent: multiStep.percent - 25 })
        } else if (multiStep.percent < 100 && multiStep.percent >= 75) {
            setMultiStep({ ...multiStep, percent: multiStep.percent - 50 })
        }
    }

    // next button
    const nextButton = multiStep.percent < 100 ? (
        <div class="next-btn">
            <Button value="Next" onClick={stepForward} fontsize="3vh" />
        </div>
    ) : ( "" )

    // back button
    const backButton = multiStep.percent > 25 ? (
        <div class="back-btn">
            <Button value="Back" onClick={stepBack} fontsize="3vh" />
        </div>
    ) : ( "" )

    // return button
    const navigate = useNavigate();
    const returnButton = multiStep.percent >= 100 ? (
        <div class="return-btn">
            <Button value="Home" onClick={() => navigate("/")} fontsize="3vh" />
        </div>
    ) : ( "" )

    // form
    const displayForm = 
        multiStep.percent > 0 && multiStep.percent <= 25 ? (
            <CypherText state={state} setState={setState} />
        ) : multiStep.percent > 25 && multiStep.percent <= 75 ? (
            <SecretKey state={state} setState={setState} />
        ) : multiStep.percent >= 100 ? (
            <PlainText state={state} setState={setState} />
        ) : ( "" )
    
    // warning messages
    const warningMessage = (
        state.shortText ? (
            <div class="short-text">Please enter at least 3 characters</div>
        ) : ( "" )
    )

    // page
    const displayPage = (
        <div class="encrypt-section">
            <div class="progress-bar">
                <ProgressBar width={"100vh"} height={5} percent={multiStep.percent}>
                <Step transition="scale">
                    {({ accomplished, index }) => (state.shortText) ? (
                        <div className="progress-step fail">
                        <div
                            className="progress-step-circle"
                            style={{
                            backgroundColor: accomplished ? "#FF2400" : "gray",
                            }}
                        >
                           !
                        </div>
                        <div className="progress-step-title">Cyper Text</div>
                        </div>
                    ) : ( 
                        <div className="progress-step">
                        <div
                            className="progress-step-circle"
                            style={{
                            backgroundColor: accomplished ? "#39ace7" : "gray",
                            }}
                        >
                            {index + 1}
                        </div>
                        <div className="progress-step-title">Cypher Text</div>
                        </div>
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished, index }) => (
                        <div className="progress-step">
                        <div
                            className="progress-step-circle"
                            style={{
                            backgroundColor: accomplished ? "#39ace7" : "gray",
                            }}
                        >
                            {index + 1}
                        </div>
                        <div className="progress-step-title">Secret Key</div>
                        </div>
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished, index }) => (
                        <div className="progress-step">
                        <div
                            className="progress-step-circle"
                            style={{
                            backgroundColor: accomplished ? "#39ace7" : "gray",
                            }}
                        >
                            {index + 1}
                        </div>
                        <div className="progress-step-title">Plain Text</div>
                        </div>
                    )}
                </Step>
                </ProgressBar>
            </div>

            <div class="encrypt-box">
                {displayForm}
                <div class="warning">
                    {warningMessage}
                </div>
                <div class="encrypt-buttons">
                    <div class="backBtn">
                        {backButton}
                    </div>
                    <div class="nextBtn">
                        {nextButton}
                    </div>
                    <div class="returnBtn">
                        {returnButton}
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div class="encrypt-container">
            {displayPage}
        </div>
    )
}

export default Decrypt