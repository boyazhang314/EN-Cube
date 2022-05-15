import React, { useState } from "react"
import { ProgressBar, Step } from "react-step-progress-bar"
import { useNavigate } from "react-router-dom"
import "react-step-progress-bar/styles.css"

import "./Encrypt.css"

import Button from "../Utilities/Button/Button"
import PlainText from "./PlainText/PlainText"
import Generate from "./Generate/Generate"
import CypherText from "./CypherText/CypherText"

const Encrypt = () => {
  const [state, setState] = useState({
    plainText: "",
    secretKey: "",
    shortText: false,
  })

  // multistep form
  const [multiStep, setMultiStep] = useState({ percent: 25 })

  const stepForward = () => {
    if (multiStep.percent < 75) {
      if (state.plainText.length >= 3) {
        setMultiStep({ ...multiStep, percent: multiStep.percent + 50 })
        setState({
          ...state,
          shortText: false,
        })
      } else {
        setMultiStep({ ...multiStep, percent: multiStep.percent })
        setState({
          ...state,
          shortText: true,
        })
      }
    } else if (multiStep.percent < 100) {
      setMultiStep({ ...multiStep, percent: multiStep.percent + 25 })
    }
    window.scrollTo(0, 300)
  }

  const stepBack = () => {
    if (multiStep.percent === 100) {
      setMultiStep({ ...multiStep, percent: multiStep.percent - 25 })
    } else if (multiStep.percent < 100 && multiStep.percent >= 75) {
      setMultiStep({ ...multiStep, percent: multiStep.percent - 50 })
    }
    window.scrollTo(0, 300)
  }

  // next button
  const nextButton =
    multiStep.percent < 100 ? (
      <div className="next-btn">
        <Button value="Next" onClick={stepForward} fontsize="3vh" />
      </div>
    ) : (
      ""
    )

  // back button
  const backButton =
    multiStep.percent > 25 ? (
      <div className="back-btn">
        <Button value="Back" onClick={stepBack} fontsize="3vh" />
      </div>
    ) : (
      ""
    )

  // return button
  const navigate = useNavigate()
  const returnButton =
    multiStep.percent >= 100 ? (
      <div className="return-btn">
        <Button
          value="Home"
          onClick={() => {
            navigate("/")
            window.location.reload()
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
      <PlainText state={state} setState={setState} />
    ) : multiStep.percent > 25 && multiStep.percent <= 75 ? (
      <Generate state={state} setState={setState} />
    ) : multiStep.percent >= 100 ? (
      <CypherText state={state} setState={setState} />
    ) : (
      ""
    )

  // warning messages
  const warningMessage = state.shortText ? (
    <div className="short-text">Please enter at least 3 characters</div>
  ) : (
    ""
  )

  // page
  const displayPage = (
    <div className="encrypt-section">
      <div className="progress-bar">
        <ProgressBar width={"100vh"} height={5} percent={multiStep.percent}>
          <Step transition="scale">
            {({ accomplished, index }) =>
              state.shortText ? (
                <div className="progress-step fail">
                  <div
                    className="progress-step-circle"
                    style={{
                      backgroundColor: accomplished ? "#FF2400" : "gray",
                    }}
                  >
                    !
                  </div>
                  <div className="progress-step-title ">Plain Text</div>
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
                  <div className="progress-step-title ">Plain Text</div>
                </div>
              )
            }
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
                <div className="progress-step-title ">Generate Key</div>
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
                <div className="progress-step-title ">Cypher Text</div>
              </div>
            )}
          </Step>
        </ProgressBar>
      </div>

      <div className="encrypt-box">
        {displayForm}
        <div className="warning">{warningMessage}</div>
        <div className="encrypt-buttons">
          <div className="backBtn">{backButton}</div>
          <div className="nextBtn">{nextButton}</div>
          <div className="returnBtn">{returnButton}</div>
        </div>
      </div>
    </div>
  )

  return <div className="encrypt-container">{displayPage}</div>
}

export default Encrypt
