import { useState, useEffect} from "react"
import {nanoid} from "nanoid"

import AnswerField from "./AnswerField";
import {shuffleArray, decodeTextFromAPI} from "../functions/Functions.js"

function Question(props){

  const [answers, setAnswers] = useState([]) // React state for storing each answer as an object inside of an array of questions

  /**
   * Function to select a single answer within one question. 
   * If another function was selected, unselect it and select a currently clicked answer
   * @param {*} id id of an answer
   */
  function selectAnswer(id){
    setAnswers(oldAnswers => oldAnswers.map(oldAnswer => {
      if (id == oldAnswer.id) {
        return {...oldAnswer,
                selected: true}
      } else {
        return {...oldAnswer,
                selected: false}
      }
    }))
  }

  /* Prepare the array of answers (only texts) - combine correct and incorrect answers, shuffle them */
  let correctAnswerTxt = props.questionData.correct_answer
  let incorrectAnswersTxt = props.questionData.incorrect_answers
  let answersTxt = [...incorrectAnswersTxt, correctAnswerTxt]
  answersTxt = shuffleArray(answersTxt)

  // Update the answers state, right now only at the begginning of the application
  useEffect(() => {
    let objAnswers = answersTxt.map(ansTxt => {
      return {id:nanoid(),
        answerTxt: ansTxt,
        selected: false  
      }
    })
    setAnswers(objAnswers)
  }, [])

  // Prepare an array of JSX AnswerField components
  let answerFields = answers.map(answer => {
    return <AnswerField key={answer.id} id={answer.id} answerText={answer.answerTxt} selected={answer.selected} handleClick={selectAnswer}/>
  }) 

  // Decode the question text from API to HTML readable format
  const decodedQuestionTxt = decodeTextFromAPI(props.questionData.question);

  // Return JSX code 
  return(
    <section className="question-container">
        <h2 className="question-text"> {decodedQuestionTxt} </h2>
        <div className="answers-container">
          {answerFields}
        </div>
        <div className="question-separator">
        </div>
    </section>
  )
}
export default Question