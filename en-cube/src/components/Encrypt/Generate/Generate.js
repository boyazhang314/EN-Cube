import React from "react"
import { useState, useEffect, useRef } from "react"
import "./Generate.css"

const Generate = () => {
  const [moves, setMoves] = useState({ m: [] })
  const [moveKeys, setMoveKeys] = useState({ keys: "" })
  const ref = useRef()
  useEffect(() => {
    console.log(window.cube)
    console.log(window.cube)
    ref.current.appendChild(window.cube.domElement)
    console.log(document.getElementById("root1"))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setMoves({ m: window.cube.twistQueue.history })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  var key = ""
  moves.m.map((move) => (key += move.command))
//   setMoveKeys({ keys: key })

  return (
    <div className="generate-container">
      <div className="generate-title">Generate Key</div>
      <div className="c" ref={ref}></div>
      <div className="move">{key}</div>
    </div>
  )
}

export default Generate
