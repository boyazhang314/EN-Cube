import React, { useState } from "react"
import { ProgressBar, Step } from "react-step-progress-bar";
import { useNavigate } from "react-router-dom";
import "react-step-progress-bar/styles.css";

import "./Decrypt.css"

import Button from "../Utilities/Button/Button"
import CypherText from "./CypherText/CypherText"
import SecretKey from "./SecretKey/SecretKey"
import PlainText from "./PlainText/PlainText"

const Decrypt = () => {
  const [state, setState] = useState({
    cypherText: "",
    secretKey: "",
    invalidCypher: false,
    invalidKey: false
  })

  // multistep form
  const [multiStep, setMultiStep] = useState({ percent: 25 })

  // hexadecimal regex
  const regex = new RegExp("^[0-9a-fA-F]*$")

  // test if key is valid
  function validKey(key) {
    var code = ["F", "F'", "S", "S'", "B", "B'", "L", "L'", "M", "M'", "R", "R'", "U", "U'", "E", "E'", "D", "D'"]
    var keys = key.split(' ')
    for (let k of keys) {
      if (!code.includes(k) && k.length > 0) {
        return false
      } 
    }
    return true
  }

  const stepForward = () => {
    if (multiStep.percent < 75) {
      if (regex.test(state.cypherText)) {
        setMultiStep({ ...multiStep, percent: multiStep.percent + 50 })
        setState({
          ...state,
          invalidCypher: false,
        })
      } else {
        setMultiStep({ ...multiStep, percent: multiStep.percent })
        setState({
          ...state,
          invalidCypher: true,
        })
      }
    } else if (multiStep.percent < 100) {
      if (validKey(state.secretKey)) {
        setMultiStep({ ...multiStep, percent: multiStep.percent + 25 })
        setState({
          ...state,
          invalidKey: false,
        })
      } else {
        setMultiStep({ ...multiStep, percent: multiStep.percent })
        setState({
          ...state,
          invalidKey: true,
        })
      }
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
  const nextButton =
    multiStep.percent < 100 ? (
      <div class="next-btn">
        <Button value="Next" onClick={stepForward} fontsize="3vh" />
      </div>
    ) : (
      ""
    )

  // back button
  const backButton =
    multiStep.percent > 25 ? (
      <div class="back-btn">
        <Button value="Back" onClick={stepBack} fontsize="3vh" />
      </div>
    ) : (
      ""
    )

  // return button
  const navigate = useNavigate()
  const returnButton =
    multiStep.percent >= 100 ? (
      <div class="return-btn">
        <Button
          value="Home"
          onClick={() => {
            navigate("/")
          }}
          fontsize="3vh"
        />
      </div>
    ) : (
      ""
    )

  // form
  const displayForm =
    multiStep.percent > 0 && multiStep.percent <= 25 ? (
      <CypherText state={state} setState={setState} />
    ) : multiStep.percent > 25 && multiStep.percent <= 75 ? (
      <SecretKey state={state} setState={setState} />
    ) : multiStep.percent >= 100 ? (
      <PlainText state={state} setState={setState} />
    ) : (
      ""
    )

  // warning messages
  const warningMessage = (state.invalidCypher && multiStep.percent < 75) ? (
    <div class="short-text">Please enter a valid cypher text</div>
  ) : (state.invalidKey && multiStep.percent < 100 && multiStep.percent > 25) ? (
    <div class="short-text">Please enter a valid secret key</div>
  ) : (
    ""
  )

  // page
  const displayPage = (
    <div class="encrypt-section">
      <div class="progress-bar">
        <ProgressBar width={"100vh"} height={5} percent={multiStep.percent}>
          <Step transition="scale">
            {({ accomplished, index }) =>
              state.invalidCypher ? (
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
              )
            }
          </Step>
          <Step transition="scale">
            {({ accomplished, index }) => state.invalidKey ? (
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
        <div class="warning">{warningMessage}</div>
        <div class="encrypt-buttons">
          <div class="backBtn">{backButton}</div>
          <div class="nextBtn">{nextButton}</div>
          <div class="returnBtn">{returnButton}</div>
        </div>
      </div>
    </div>
  )

  return <div class="encrypt-container">{displayPage}</div>
}

export default Decrypt
