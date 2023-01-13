import React from "react";
import {nanoid} from "nanoid"

import AnswerField from "./AnswerField";
import {shuffleArray, decodeTextFromAPI} from "../functions/Functions.js"

export default function Question(props){

  /* Prepare the array of answers - combine correct and incorrect answers, shuffle them*/
  let correctAnswer = props.questionData.correct_answer
  let incorrectAnswers = props.questionData.incorrect_answers
  let answers = incorrectAnswers.map(incAnswer => {
    let id = nanoid();
    return <AnswerField key={id} answerText={incAnswer}/> 
  })
  answers.push(<AnswerField answerText={correctAnswer}/>)
  answers = shuffleArray(answers)

  const decodedQuestionTxt = decodeTextFromAPI(props.questionData.question);

  const [selectedAnswers, setSelectedAnswers] = React.useState("")

  return(
    <section className="question-container">
        <h2 className="question-text"> {decodedQuestionTxt} </h2>
        <div className="answers-container">
          {answers}
        </div>
        <div className="question-separator">
        </div>
    </section>
  )
}