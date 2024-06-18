/* eslint-disable react/prop-types */
import { useState } from 'react'
import questions from '../../../src/questions'
import Result from './Result'

export default function QuestionBox(props) {
  let color=props.props
  let[highlight,setHighlight]=useState(false)
  let css={
    background:color?"#a020f0":"#ffffba",
  }
  
  let highlightStyle={
    color:highlight?"red":"black"
  }

  let[questionNo,setquestionNo]=useState(0)
  let[score,setScore]=useState(0)

  let handleOption=(e)=>{
    console.log(e.target.value)
    setScore((e.target.value==='true'?score+1:score))
    setquestionNo(questionNo+1)
  }

  return (
    <>
      {questionNo <5 ?(
        <div className='question-box' style={css}>
          <h2>Question: {questionNo+1}</h2>
          <h3 style={highlightStyle}>{questions[questionNo]}</h3>
          <div className='option-box'>
            {questions[questionNo].options.map((e)=>(
              <button className='options' value={e.isCorrect} key={e.id} onClick={handleOption}>{e}</button>
            ))}
          </div>
          <div>
            <button className='highlight-button' onClick={()=>setHighlight(true)}>Highlight</button>
            <button className='highlight-button' onClick={()=>setHighlight(false)}>Remove Highlight</button>
          </div>
        </div>
      ):(<Result props={[score,color]}/>)
    }
    </>
  )
}