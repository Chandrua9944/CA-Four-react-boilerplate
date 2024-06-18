/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Result(props) {

  let result=props.props[0]
  let color=props.props[1]

  let resultStyle={
    background: color?"#ba0fc9":"#ebffb4"
  }
  let handleRestart=()=>{
    window.location.reload()
  }
  return (
    <div className='result-box' style={resultStyle}>
      <h1>Final Results</h1>
      <h2>{result} out of 5 correct - {(result/5)*100}.00%</h2>
      <button className='restart' onClick={handleRestart}>Restart game</button>
    </div>
  )
}