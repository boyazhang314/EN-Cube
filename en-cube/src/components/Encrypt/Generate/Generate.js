import React from "react"
import { useState, useEffect, useRef } from "react"
import "./Generate.css"

const Generate = ({state, setState}) => {
  const [moves, setMoves] = useState({ m: [] })
  const ref = useRef()
  useEffect(() => {
    ref.current.appendChild(window.cube.domElement)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setMoves({ m: window.cube.twistQueue.history })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  // conver moves to readable letters
  function convert(ch) {
    if (ch.toUpperCase() === ch) {
      return ch;
    } else {
      return ch.toUpperCase() + "'"
    }
  }

  var key = ""
  for (let i = 0; i < moves.m.length; ++i) {
    if (i > 40) break;
    key += " " + convert(moves.m[i].command)
  }

  const moveList = moves.m.length === 0 ? (
    <div className="generate-title">Generate Key</div>
  ) : (
    <div className="move">{key}</div>
  )

  useEffect(() => {
    setState({
      ...state,
      secretKey: key
    })
  }, [key])

  return (
    <div className="generate-container">
      {moveList}
      <div className="c" ref={ref}></div>
    </div>
  )
}

export default Generate
