import React from "react";
import {nanoid} from "nanoid"

import Question from "./Question.jsx"

export default function QuestionsScreen(){

  const [checkAnswers, setCheckAnswers] = React.useState(false)

  const [questionData, setQuestionData] = React.useState([])

  /* Calling open trivia database API */
  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => setQuestionData(data.results))
  }, [checkAnswers])

  const questions = questionData.map(qData => {
    let id = nanoid()
    return <Question key={id} questionData={qData}/>
  })


  return(
    <>
      <main className="question-screen-container">
        <h2 className="question-screen-heading"> Test your skills </h2>
        {questions} 
      </main>
      <button type="button" className="btn-check-answers"> Check answers </button>
    </>
  )
}