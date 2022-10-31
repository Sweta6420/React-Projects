import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  const [showInfo, setShowInfo] = useState(false)
  const [showAnswer, setShowAnswer] = 'answer'
  const btn = showInfo ?  'btn-minus' : 'btn-plus'
  const question = showInfo ?  'question' : 'question'
  return(
    <article className={question}>
      <header>
        <h4>{title}</h4>
        <button className={btn} onClick={() => 
          {
            setShowInfo(!showInfo)
        }}>{showInfo ? <AiOutlineMinus />:<AiOutlinePlus />}</button>
      </header>
      <div className='{showanswer}'>
        {showInfo && <p>{info}</p>}
      </div>
    </article>
  )
};

export default Question;
