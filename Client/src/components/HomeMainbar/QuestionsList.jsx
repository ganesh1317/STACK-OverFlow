import React from 'react'

import Questionss from './Questionss'
const QuestionsList = ({questionsList}) => {
  console.log (questionsList)
  return (
    <>
      {
        questionsList.map((question,index) => (
            <Questionss question={question} key={index} />
        ))
      }
    </>
  )
}

export default QuestionsList

