/* eslint-disable react/prop-types */
import { useState } from 'react';
import questions from '../../../src/questions';
import Result from './Result';

export default function QuestionBox(props) {
  const color = props.props; 
  const [highlight, setHighlight] = useState(false);
  const [questionNo, setQuestionNo] = useState(0);
  const [score, setScore] = useState(0);

  const css = {
    background: color ? "#a020f0" : "#ffffba",
  };

  const highlightStyle = {
    color: highlight ? "red" : "black",
  };

  const handleOption = (e) => {
    const isCorrect = e.target.value === 'true';
    setScore(isCorrect ? score + 1 : score);
    setQuestionNo(questionNo + 1);
  };

  return (
    <>
      {questionNo < 5 ? (
        <div className='question-box' style={css}>
          <h2>Question: {questionNo + 1}</h2>
          <h3 style={highlightStyle}>{questions[questionNo].text}</h3>
          <div className='option-box'>
            {questions[questionNo].options.map((option) => (
              <button
                className='options'
                value={option.isCorrect}
                key={option.id}
                onClick={handleOption}
              >
                {option.text}
              </button>
            ))}
          </div>
          <div>
            <button className='highlight-button' onClick={() => setHighlight(true)}>
              Highlight
            </button>
            <button className='highlight-button' onClick={() => setHighlight(false)}>
              Remove Highlight
            </button>
          </div>
        </div>
      ) : (
        <Result props={[score, color]} />
      )}
    </>
  );
}
